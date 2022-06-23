import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Row, Col, Input, Form, ButtonGroup } from 'reactstrap'
import { Star, X } from 'react-feather'
import SideModal from '../../component/sideModal'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import FormGroupCustom from "../../component/fromGropCustoms/index.js"
import { createSelectOptions, createAsyncSelectOptions } from '../../utility/Utils'
import { addedProduct } from '../../api/product/index.js'
const ProductForm = ({ show, edit = null, handleModal, show1 }) => {
    console.log("..edit", show1)
    const [open, setOpen] = useState(show)
    const [loading, setLoading] = useState(false)
    const [editData, setEditData] = useState(show1)
    const [unit1, setUnit1] = useState([])
    const form = useForm()
    const dispatch = useDispatch()
    const { formState: { errors }, handleSubmit, control, register, reset, setValue, watch } = form
    const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleModal} />
    useEffect(() => {
        if (show) setOpen(true)
        if (!show) reset()
    }, [show])

    useEffect(() => {
        if (show1) { setEditData(show1) }
    }, [show1])

    const unitType = [
        {
            id: 1,
            name: "KiloGrams",
            abbreiation: "kg"

        },
        {
            id: 2,
            name: "Litre",
            abbreiation: "ltr"

        },
        {
            id: 3,
            name: "PACKS",
            abbreiation: "pack"
        },
        {
            id: 4,
            name: "Number",
            abbreiation: "nos"
        },
        {
            id: 5,
            name: "BOTTLES",
            abbreiation: "btl"
        }
    ]

    const onSubmit = (data) => {
        dispatch(addedProduct(data))
    }
    const loadUnit = () => {
        return (createAsyncSelectOptions(unitType, "name", "id"))
    }

    useEffect(() => {
        loadUnit()
    }, [])


    return (<>
        <div>
            <Modal isOpen={show} toggle={handleModal}
                close={CloseBtn}
                className='modal-dialog-centered'>
                <ModalHeader toggle={handleModal} >Product Form</ModalHeader>
                <ModalBody>
                    <>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroupCustom
                                value={editData?.name}
                                label={" Enter product "}
                                name={"name"}
                                type={"text"}
                                errors={errors}
                                className="mb-2"
                                control={control}
                                rules={{ required: true }} />
                            <Row>
                                <Col md="8">
                                    <FormGroupCustom
                                        value={editData?.quanitity}
                                        label={" Enter quanitity"}
                                        name={"quanitity"}
                                        type={"number"}
                                        errors={errors}
                                        className="mb-2"
                                        control={control}
                                        rules={{ required: true }} />
                                </Col>
                                <Col md="4">
                                    <FormGroupCustom
                                        value={editData?.unit}
                                        label={" Enter unit"}
                                        name={"unit"}
                                        options={unit1}
                                        type={"select"}
                                        errors={errors}
                                        className="mb-2"
                                        control={control}
                                        rules={{ required: true }} />
                                </Col>
                            </Row>
                            <FormGroupCustom
                                value={editData?.price}
                                label={" Enter Price"}
                                name={"price"}
                                type={"number"}
                                errors={errors}
                                className="mb-2"
                                control={control}
                                rules={{ required: true }} />

                            <FormGroupCustom
                                value={editData?.description}
                                label={" Enter description"}
                                name={"description"}
                                type={"textarea"}
                                errors={errors}
                                className="mb-2"
                                control={control}
                                rules={{ required: true }} />

                            <ModalFooter>
                                <Button type='submit' color='primary'>
                                    submit
                                </Button>
                                <Button outline color='secondary' onClick={handleModal}  >
                                    close
                                </Button>
                            </ModalFooter>
                        </Form>
                    </>

                </ModalBody>
            </Modal>
        </div>



    </>)
}

export default ProductForm