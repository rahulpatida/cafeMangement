import React, { useEffect, useState } from 'react'

import { useFieldArray, useForm } from 'react-hook-form'
import FormGroupCustom from '../../component/fromGropCustoms'
import { Button, Card, CardBody, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Form } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { addedMenu } from '../../api/menuproduct'
const ModalManu = ({ Open, handerClose, handerOpen , edit}) => {

  const dispatch=useDispatch()
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
const [data, setdata]=useState([])

  const onsubmit = (data) => {
    console.log(data)
    dispatch(addedMenu((data)))
    reset()
   
  }
  // useEffect(()=>{
  //      dispatch(addedMenu((data)))
  //      reset()
  // },[data, reset])
  return (
    <>

      <div>

        {

          watch(edit)?
          <Modal
          size="lg"
          toggle={handerOpen}
          isOpen={Open}
        >
          <Form onSubmit={handleSubmit(onsubmit)}>
            <ModalHeader toggle={handerClose}>
              {edit?'Update_Menu':'Create_Menu'}
            </ModalHeader>
            <ModalBody>
              <Card>
                <CardBody>

                  <Row>
                
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

                        placeholder={("price")}
                        type="number"
                        name="price"
                        label={("price")}
                        className='mb-1'
                        // errors={errors}
                        control={control}
                        value={edit?.price}
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
                  </Row>
                  <Row>
                    <Col md='12'>
                      <FormGroupCustom

                        placeholder={("description")}
                        type="textarea"
                        name="description"
                        label={("description")}
                        className='mb-1'
                        // errors={errors}
                        control={control}
                        value={edit?.description}
                        rules={{ required: true }}
                      />
                    </Col>
                    
                    {/* <Col md='4'> */}
                      {/* <FormGroupCustom

                        placeholder={("date")}
                        type="date"
                        name="start_date"
                        label={("Date")}
                        className='mb-1'
                        // errors={errors}
                        control={control}
                        //  value={edit?.date}
                        rules={{ required: true }}
                      />
                    </Col> */}
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
        </Modal>:
        <Modal
        size="lg"
        toggle={handerOpen}
        isOpen={Open}
      >
        <Form onSubmit={handleSubmit(onsubmit)}>
          <ModalHeader toggle={handerClose}>
            {edit?'Update_Menu':'Create_Menu'}
          </ModalHeader>
          <ModalBody>
            <Card>
              <CardBody>

                <Row>
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

                      placeholder={("price")}
                      type="number"
                      name="price"
                      label={("price")}
                      className='mb-1'
                      // errors={errors}
                      control={control}
                      // value={edit?.question}
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
                </Row>
                <Row>
                  <Col md='12'>
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
        }
      </div>
    </>
  )
}

export default ModalManu