import React, { useState } from 'react'

import { useFieldArray, useForm } from 'react-hook-form'
import FormGroupCustom from '../../component/fromGropCustoms'
import { Button, Card, CardBody, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row, Form } from 'reactstrap'
const ModalManu = ({ Open, handerClose, handerOpen , edit}) => {
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
          <Form onSubmit={handleSubmit(onsubmit)}>
            <ModalHeader toggle={handerClose}>
              {edit?'Update_Menu':'Create_Menu'}
            </ModalHeader>
            <ModalBody>
              <Card>
                <CardBody>

                  <Row>
                    <Col md='6'>
                      <FormGroupCustom

                        placeholder={("product")}
                        type="text"
                        name="product"
                        label={("Product")}
                        className='mb-1'
                        // errors={errors}
                        control={control}
                        // value={edit?.question}
                        rules={{ required: true }}
                      />
                    </Col>
                    <Col md='6'>
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
                  </Row>
                  <Row>
                    <Col md='4'>
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
                    <Col md='4'>
                      <FormGroupCustom

                        placeholder={("discount")}
                        type="number"
                        name="discount"
                        label={("discount")}
                        className='mb-1'
                        // errors={errors}
                        control={control}
                        // value={edit?.question}
                        rules={{ required: true }}
                      />
                    </Col>
                    <Col md='4'>
                      <FormGroupCustom

                        placeholder={("date")}
                        type="date"
                        name="start_date"
                        label={("Date")}
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

export default ModalManu