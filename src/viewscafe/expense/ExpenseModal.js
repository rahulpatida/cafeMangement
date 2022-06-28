import React, { useEffect, useState } from 'react'

import { useFieldArray, useForm } from 'react-hook-form'
import FormGroupCustom from '../../component/fromGropCustoms'
import { Button, Card, CardBody, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Form, UncontrolledTooltip, Label } from 'reactstrap'
import { createSelectOptions } from '../../utility/Utils'
import { FileMinus, Plus } from 'react-feather'
import CategoryModalAdd from './CategoryModalAdd'
import { isValid } from '../../utility/helpers/common'
import Show from '../../utility/Show'
const ExpenseModal = ({ Open, handerClose, handerOpen, edit = null }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        watch,
        getValues,
        setError
    } = useForm()
    const [options1, setoptions] = useState([])
    const [price, setprice] = useState(0)
    const [quantity, setquantity] = useState(0)
    const [show, setShow1] = useState(false)

    const handerClose1 = () => setShow1(false)
    const handershow1 = () => setShow1(true)

    const onsubmit = (data) => {
        console.log({ ...data, })
    }
    const options = () => {
        setoptions(createSelectOptions(test, "name", 'id'))
    }
    useEffect(() => {
        options()
    }, [])
    const test = [
        {
            id: 1,
            name: 'tea'
        },
        {
            id: 2,
            name: 'salary'
        },
        {
            id: 3,
            name: 'transport'
        },
        {
            id: 4,
            name: 'rent'
        },
        {
            id: 5,
            name: 'petrol'
        }

    ]

    const handlerCategory = () => {
        setShow1(!show)
    }
// useEffect(()=>{
//     watch(setValue('rate') * watch(setValue('quantity')))
// },[setValue])

    console.log(parseInt(watch('amount')), "vghg")
    return (

        <>
            <CategoryModalAdd handerClose1={handerClose1} handershow1={handershow1} show={show} control={control} />
            <div>

                <Modal
                    size="lg"
                    toggle={handerOpen}
                    isOpen={Open}
                >
                    <Form onSubmit={handleSubmit(onsubmit)}>
                        <ModalHeader toggle={handerClose}>
                            'Create_Expense
                        </ModalHeader>
                        <ModalBody>
                            <Card>
                                <CardBody>

                                    <Row>

                                        <Col md='10' sm='8' >

                                            <FormGroupCustom 

                                                placeholder={("category")}
                                                // isMulti
                                                type={"select"}
                                                name="category"
                                                label={("Category")}
                                                className='mb-2 '
                                                // errors={errors}
                                                control={control}
                                                options={options1}
                                                // loadOptions={options1}
                                                // value={edit?.question}
                                                rules={{ required: true }}
                                            
                                            />

                                        </Col>

                                        <Col md='2' xs='4' className='mt-4 p-2'>
                                            <UncontrolledTooltip target="create-category">create-category</UncontrolledTooltip>
                                            <Button
                                                onClick={handlerCategory}
                                                id='create-category'
                                            >

                                                <Plus size={18} />
                                            </Button>
                                        </Col>

                                        {/* <Col md='2' className='mt-4 p-2'>
                                            <UncontrolledTooltip target="create-category">create-category</UncontrolledTooltip>
                                            <Button
                                                onClick={handlerCategory}
                                                id='create-category'
                                            >

                                                <Plus size={18} />
                                            </Button>
                                        </Col> */}




                                    </Row>
                                    <h5>Billed item</h5>
                                    <Row>

                                        <Col md='3'>

                                            <FormGroupCustom

                                                placeholder={("item Name")}
                                                type="text"
                                                name="items_name"
                                                label={("Item Name")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}
                                                // value={edit?.question}
                                                rules={{ required: true }}

                                            />
                                        </Col>
                                        {/* {watch('items_name')? <Label className='fw-bolder' >
                                            <Button>click</Button>
                                        </Label>:null
                                        
                                        } */}

                                        <Col md='3'>

                                            <FormGroupCustom

                                                placeholder={("Qty")}
                                                type="number"
                                                name="quantity"
                                                label={("Qty")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}

                                                rules={{ required: true }}
                                            />
                                        </Col>
                                        <Col md='3'>

                                            <FormGroupCustom

                                                placeholder={("Rate")}
                                                type="number"
                                                name="rate"
                                                label={("Rate")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}

                                            // rules={{ required: true }}
                                            />
                                        </Col>


                                        {/* <p> {watch("quantity") * watch("rate")} </p> */}
                                        <Col md='3'>
                                            {/* <Label className='fw-bolder'>
                                                Amount
                                            </Label > */}
                                            {/* {watch("rate") > 0 ? <p className='text-success'> {watch("quantity") * watch("rate")} </p> : ""} */}


                                            <FormGroupCustom
                                                key={watch("quantity") * watch("rate")}
                                                placeholder={("Amount")}
                                                type="text"
                                                name="amount"
                                                label={("Amount")}
                                                className='mb-1'
                                                errors={errors}
                                                control={control}
                                                value={watch("quantity") * watch("rate")}
                                            // rules={{ required: true }}

                                            />

                                        </Col>
                                    </Row>
                                    <Label>hfffj</Label>
                                    <Row className='mt-2 '>

                                        <Col md='6'>
                                            <span>TotalExpense:</span>
                                        </Col>
                                        <Col md='6'>
                                            <span>{watch("quantity") * watch("rate")}</span>
                                        </Col>
                                    </Row>
                                    {/* {watch('rate') ?

                                        <Card>
                                            <CardBody>
                                                <Row className='mt-5'>

                                                    <Col md='8'>
                                                        payment
                                                    </Col>
                                                    <Col md='2'>
                                                        <FormGroupCustom

                                                            placeholder={("category")}
                                                            // isMulti
                                                            type="select"
                                                            name="category"
                                                            label={("Category")}
                                                            className='mb-1'
                                                            // errors={errors}
                                                            control={control}
                                                            options={options1}
                                                            // value={edit?.question}
                                                            rules={{ required: true }}
                                                        />
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card> : null

                                    } */}
                                    <Row className='mt-4'>
                                        <FormGroupCustom

                                            placeholder={("description")}
                                            type="textarea"
                                            name="description"
                                            label={("description")}
                                            className='mb-1'
                                            // errors={errors}
                                            control={control}
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
                            <Button onClick={handerClose}>
                                Cancel
                            </Button>

                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        </>
    )
}

export default ExpenseModal

