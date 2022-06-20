import React, { useState } from 'react'
import DropDownMenu from '../../component/dropdownManu'
import FormGroupCustom from '../../component/fromGropCustoms'
import TableGrid from '../../component/tableGrid'
import { useForm } from 'react-hook-form'
import { Button } from 'reactstrap'
// import SideModal from '../../component/sideModal/sideModal'
const ProductManu = () => {

  const { formState: { errors }, handleSubmit, control, reset, setValue, watch, getValues } = useForm()

  return (
    <>
      <h1>Product</h1>
      <TableGrid />
      <DropDownMenu />

      <FormGroupCustom
        label={"title"}
        name={"title"}
        type={"checkbox"}
        errors={errors}
        //  values={companyData}
        className="mb-2"
        control={control}
        rules={{ required: true }} />



     
    </>


  )
}

export default ProductManu