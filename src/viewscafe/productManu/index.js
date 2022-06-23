// import React, { Component, useState } from 'react'
// import DropDownMenu from '../../component/dropdownManu'
// import FormGroupCustom from '../../component/fromGropCustoms'
// import TableGrid from '../../component/tableGrid'
// import { useForm } from 'react-hook-form'
// import { Button } from 'reactstrap'
// import CenteredModal from '../../component/CenteredModal'
// import ModalManu from './ModalManu'
// // import SideModal from '../../component/sideModal/sideModal'
// const ProductManu = () => {

//   const { formState: { errors }, handleSubmit, control, reset, setValue, watch, getValues } = useForm()

//   // const[open, setOpen]=useState(false)
//   // const  handleClose=()=>setOpen(false)
//   // const handershow= ()=>{
//   //   setOpen(!open)
//   // }
//   return (
//     <>
//       <h1>Product</h1>
//       <TableGrid />
//       <DropDownMenu />

//       <FormGroupCustom
//         label={"title"}
//         name={"title"}
//         type={"checkbox"}
//         errors={errors}
//         //  values={companyData}
//         className="mb-2"
//         control={control}
//         rules={{ required: true }} />


//     </>


//   )
// }

// export default ProductManu
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { ChevronDown, Eye, EyeOff, Plus, RefreshCcw, Sliders } from 'react-feather'
import { useForm } from 'react-hook-form'
import ReactPaginate from 'react-paginate'
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup, Card, CardHeader, CardTitle, Col, UncontrolledTooltip, Row } from 'reactstrap'
import { formatDateTimeByFormat } from '../../utility/Utils'
import Shimmer from '../../component/shimmers/Shimmer'
import BsTooltip from '../../component/tooltip'
import Show from '../../utility/Show'
import ModalManu from './ModalManu'





const ProductManu = () => {
    const [loading, setLoading] = useState(false)

    const [rowsPerPage, setRowsPerPage] = useState("2")
    const [edit, setedit] = useState([])

    const [Open, setOpen] = useState(false)
    const handerClose = () => setOpen(false)
    const handerOpen = () => setOpen(true)
    const handlerShow = () => {
        setOpen(!Open)
    }


    const edithandler = (row) => {
        setedit(row.data)

    }
    const data = [
        {
            id: 1,
            product: 'samosa',
            price: '20',
            description: 'this is best samosa'

        },
        {
            id: 2,
            product: 'coeffi',
            price: '20',
            description: 'this is best samosa'

        },
        {
            id: 3,
            product: 'milk',
            price: '20',
            description: 'this is best samosa'

        },
        {
            id: 4,
            product: 'samosa',
            price: '20',
            description: 'this is best samosa'

        },
        {
            id: 5,
            product: 'coeffi',
            price: '20',
            description: 'this is best samosa'

        },
        {
            id: 6,
            product: 'milk',
            price: '20',
            description: 'this is best samosa'

        }
    ]



    const ManuColumn = [

        {

            name: ("#"),
            selector: (row, i) => (row.id ? (i + 1) : null),
            maxWidth: "10px"

        },


        {
            name: "product",
            selector: 'product',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: "price",
            selector: 'price',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: "description",
            selector: 'description',
            sortable: true,
            minWidth: '150px'
        },

        {
            name: ("date"),
            selector: ({ value }) => {
                return value !== null ? formatDateTimeByFormat(value, "YYYY-MM-DD") : ""
            },
            sortable: true,
            minWidth: '150px'
        },
        {
            name: ("actions"),
            allowOverflow: true,
            minWidth: "70px",
            cell: row => {

                return (
                    <ButtonGroup >
                        {/* <Hide IF={row?.file === null}> */}
                        {/* {row?.data !== null ? <BsTooltip className="ms-1" Tag={"a"} role={"button"} target={"_blank"} href={row?.file} title={("View")}>
                            <Eye size="18" />
                        </BsTooltip> : <BsTooltip className="ms-1" Tag={"a"} role={"button"} title={("no-View")}>
                            <EyeOff size="18" />
                        </BsTooltip>} */}
                        {/* </Hide> */}
                        <UncontrolledTooltip target="View-Manu">View-Manu</UncontrolledTooltip>
                        <Button id='View-Manu'

                            onClick={edithandler(row)}

                        >

                            <Eye size={18} />
                        </Button>
                    </ButtonGroup>
                )
            }
        }
    ]

    const CustomPagination = () => {
        //   const count = Math.ceil(cashier?.total / cashier?.per_page)
        return (
            <ReactPaginate
                initialPage={1}
                disableInitialCallback
                previousLabel={''}
                nextLabel={''}
                breakLabel='...'
                pageCount={5}
                activeClassName='active'
                //   onPageChange={page => handlePagination(page)}
                pageClassName={'page-item'}
                nextLinkClassName={'page-link'}
                nextClassName={'page-item next'}
                previousClassName={'page-item prev'}
                previousLinkClassName={'page-link'}
                pageLinkClassName={'page-link'}
                breakClassName='page-item'
                breakLinkClassName='page-link'
                containerClassName={
                    'pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1'
                }
            />

        )
    }
    const customStyles = {
        title: {
            style: {
                fontColor: 'red',
                fontWeight: '900'
            }
        },
        rows: {
            style: {
                minHeight: '72px'// override the row height
            }
        },
        headCells: {
            style: {
                fontSize: '19px',
                fontWeight: '500',
                textTransform: 'captilize',
                paddingLeft: '0 8px'
                // background: "orange"
            }
        },
        cells: {
            style: {
                fontSize: '14px',
                paddingLeft: '0 8px'
            }
        }
    }
    return (
        <>

            {/* <Card> */}
            <ModalManu Open={Open} handerClose={handerClose} handerOpen={handerOpen} />
            <CardHeader className='border-bottom inline  '>
                <Row>
                    <Col md='11' xs={8}>
                        <CardTitle className='text-primary' tag='h4'>Product Manu</CardTitle>

                    </Col>
                    <Col md='1' xs={4}>
                        <ButtonGroup>
                            <UncontrolledTooltip target="create-button">create-new</UncontrolledTooltip>
                            <Button id='create-button'

                                onClick={handlerShow}
                            >

                                <Plus size={18} />
                            </Button>
                            <UncontrolledTooltip target="reload">create-new</UncontrolledTooltip>
                            <Button id='reload'>

                                <Sliders size={18} />
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </CardHeader>
            <Row>

                {loading ? <>
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5, marginTop: 5 }} />
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5 }} />
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5 }} />
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5 }} />
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5 }} />
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5 }} />
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5 }} />
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5 }} />
                    <Shimmer style={{ width: "100%", height: 50, marginBottom: 5 }} />
                </> : <>
                    <DataTable
                        noHeader
                        selectableRows
                        pagination
                        paginationServer
                        className='react-dataTable'
                        columns={ManuColumn}
                        noDataComponent={<div className="nodata-class">
                            {("no-record")}
                        </div>}
                        customStyles={customStyles}
                        sortIcon={<ChevronDown size={12} />}
                        paginationComponent={CustomPagination}
                        data={data}
                    />

                </>
                }
            </Row>
            {/* </Card> */}
        </>
    )
}


export default ProductManu

