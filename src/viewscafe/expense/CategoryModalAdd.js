import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Form } from 'reactstrap'
import FormGroupCustom from '../../component/fromGropCustoms'
import { createSelectOptions } from '../../utility/Utils'
const CategoryModalAdd = ({
    handerClose1,
    handershow1,
    show,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    getValues,
    setError
}) => {
    const [options1, setoptions] = useState([])


    const options = () => {
        setoptions(createSelectOptions(test, "name", 'id'))
    }
    useEffect(() => {
        options()
    }, [])
    const test = [
        {
            id: 1,
            name: 'Indirect Expense'
        },
        {
            id: 2,
            name: 'Direct Expense'
        },
       
    ]
    return (
        <>

            <Modal
                size="sm"
                toggle={handershow1}
                isOpen={show}
            >
                <Form >
                    <ModalHeader toggle={handerClose1}>
                        {/* {edit ? 'Update_Expense' : 'Create_Expense'} */}
                        Create_Category
                    </ModalHeader>
                    <ModalBody>
                        <Card>
                            <CardBody>

                                <Row>



                                    <FormGroupCustom

                                        placeholder={("category")}
                                        // isMulti
                                        type="text"
                                        name="category"
                                        label={("Category")}
                                        className='mb-1'
                                        // errors={errors}
                                        control={control}
                                        // options={options1}
                                        // value={edit?.question}
                                        rules={{ required: true }}
                                    />


                                </Row>

                                <Row>
                                    <FormGroupCustom

                                        placeholder={("expense_type")}
                                        // isMulti
                                        type="select"
                                        name="expense_type"
                                        label={("Expense_Type")}
                                        className='mb-1'
                                        // errors={errors}
                                        control={control}
                                         options={options1}
                                        // value={edit?.question}
                                        rules={{ required: true }}
                                    />


                                </Row>





                            </CardBody>
                        </Card>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                        // onClick={}
                        >
                            save
                        </Button>
                        {' '}
                        <Button onClick={handerClose1}>
                            Cancel
                        </Button>

                    </ModalFooter>
                </Form>
            </Modal>
        </>
    )
}

export default CategoryModalAdd