import React, { useState } from 'react'

import { useFieldArray, useForm } from 'react-hook-form'
import FormGroupCustom from '../../component/fromGropCustoms'
import { Button, Card, CardBody, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Form } from 'reactstrap'
const ModalRecipesaddup = ({ Open, handerClose, handerOpen, edit }) => {
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
                            'Create_Recipes
                        </ModalHeader>
                        <ModalBody>
                            <Card>
                                <CardBody>

                                    <Row>

                                        <Col md='4' xs='8'>

                                            <FormGroupCustom

                                                placeholder={("Title")}
                                                isMulti
                                                type="text"
                                                name="title"
                                                label={("Title")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}
                                                // options={options1}
                                                // value={edit?.question}
                                                rules={{ required: true }}
                                            />

                                        </Col>

                                        <Col md='4'>
                                            <FormGroupCustom

                                                placeholder={("category")}
                                                type="select"
                                                name="category"
                                                label={("category")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}
                                                value={edit?.question}
                                                rules={{ required: true }}
                                            />
                                        </Col>
                                        <Col md='4'>
                                            <FormGroupCustom

                                                placeholder={("subcategory")}
                                                type="select"
                                                name="subcategory"
                                                label={("subcategory")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}
                                                value={edit?.question}
                                                rules={{ required: true }}
                                            />
                                        </Col>
                                        <Row>
                                            <FormGroupCustom

                                                placeholder={("calories")}
                                                type="number"
                                                name="calories"
                                                label={("calories")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}
                                                value={edit?.question}
                                                rules={{ required: true }}
                                            />
                                      
                                    </Row>
                                </Row>
                                <Row className='mt-4'>
                                    <FormGroupCustom

                                        placeholder={("Recipe_method")}
                                        type="textarea"
                                        name="recipe_method"
                                        label={("Recipe_method")}
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

export default ModalRecipesaddup