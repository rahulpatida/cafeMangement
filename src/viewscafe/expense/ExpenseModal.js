import React, { useState } from 'react'

import { useFieldArray, useForm } from 'react-hook-form'
import FormGroupCustom from '../../component/fromGropCustoms'
import { Button, Card, CardBody, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Form } from 'reactstrap'
const ExpenseModal = ({ Open, handerClose, handerOpen }) => {
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


    const onsubmit = (data) => {
        console.log(data)
    }

    const test = [
        { Expense: 'Expense' },
        { Saving: 'Saving' },
        { Investment: 'Invesme   nt' }
    ]
    return (
        <>

            <div>

                <Modal
                    size="lg"
                    toggle={handerOpen}
                    isOpen={Open}
                >
                    <Form >
                        <ModalHeader toggle={handerClose}>
                            create Transactions
                        </ModalHeader>
                        <ModalBody>
                            <Card>
                                <CardBody>

                                    <Row>

                                        <Col md='6'>
                                            <FormGroupCustom

                                                placeholder={("Name")}
                                                type="text"
                                                name="name"
                                                label={("Name")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}
                                                // value={edit?.question}
                                                rules={{ required: true }}
                                            />
                                        </Col>
                                        <Col md='6'>
                                            <FormGroupCustom

                                                placeholder={("select")}
                                                type="select"
                                                name="type"
                                                label={("expense")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}
                                                options={test}
                                                // value={edit?.question}
                                                rules={{ required: true }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md='6'>

                                            <FormGroupCustom

                                                placeholder={("Date")}
                                                type="date"
                                                name="date"
                                                label={("Date")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}
                                                // value={edit?.question}
                                                rules={{ required: true }}
                                            />
                                        </Col>
                                        <Col md='6'>
                                            <FormGroupCustom

                                                placeholder={("description")}
                                                type="text"
                                                name="description"
                                                label={("description")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}
                                                // value={edit?.question}
                                                rules={{ required: true }}
                                            />
                                        </Col>
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