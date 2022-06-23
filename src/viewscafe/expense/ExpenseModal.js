import React, { useEffect, useState } from 'react'

import { useFieldArray, useForm } from 'react-hook-form'
import FormGroupCustom from '../../component/fromGropCustoms'
import { Button, Card, CardBody, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Form, UncontrolledTooltip } from 'reactstrap'
import { createSelectOptions } from '../../utility/Utils'
import { Plus } from 'react-feather'
import CategoryModalAdd from './CategoryModalAdd'
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
    const [price, setprice]=useState(0)
    const [quantity, setquantity]=useState(0)
const [show, setShow1]=useState(false)

     const handerClose1=()=>setShow1(false)
     const handershow1=()=>setShow1(true)

    const onsubmit = (data) => {
        console.log(data)
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

    const  handlerCategory =()=>{
        setShow1(!show)
  }
    return (
        
        <>
        <CategoryModalAdd  
        handerClose1={handerClose1}
         handershow1={handershow1} 
         show={show} 
          control={control}  
         handleSubmit={ handleSubmit}
         watch={ watch}
         reset={reset}
         setValue={ setValue}
         getValues={getValues}
         setError={ setError}
          />
            <div>

                <Modal
                    size="lg"
                    toggle={handerOpen}
                    isOpen={Open}
                >
                    <Form >
                        <ModalHeader toggle={handerClose}>
                            {edit ? 'Update_Expense' : 'Create_Expense'}
                        </ModalHeader>
                        <ModalBody>
                            <Card>
                                <CardBody>

                                    <Row>

                                        <Col md='10'>

                                            <FormGroupCustom

                                                placeholder={("category")}
                                                 isMulti
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
                                         <Col md='2' className='mt-4 p-2'>
                                         <UncontrolledTooltip target="create-category">create-category</UncontrolledTooltip>
                                        <Button
                                        onClick={handlerCategory}
                                        id='create-category'
                                        >
                                            
                                            <Plus size={18} />
                                        </Button>
                                        </Col> 




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
                                        <Col md='3'>

                                            <FormGroupCustom

                                                placeholder={("Qty")}
                                                type="number"
                                                name="quantity"
                                                label={("Qty")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}
                                                // value={edit?.question}
                                            
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
                                                // value={edit?.question}
                                              
                                                // rules={{ required: true }}
                                            />
                                        </Col>
                                        <Col md='3'>

                                            <FormGroupCustom

                                                placeholder={("Amount")}
                                                type="Amount"
                                                name="amount"
                                                label={("Amount")}
                                                className='mb-1'
                                                // errors={errors}
                                                control={control}
                                                // value={edit?.question}
                                                rules={{ required: true }}
                                              
                                            />
                                        </Col>
                                    </Row>
                                    <Row className='mt-5'>

                                      <Col md='6'>
                                      <span>TotalAmount:</span>
                                      </Col>
                                      <Col md='6'>
                                      <span>......</span>
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