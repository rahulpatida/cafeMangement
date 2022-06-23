// import classNames from 'classnames'
// import axios from 'axios'
// import { useState, useEffect } from 'react'
// import { loadProduct, deletProduct } from '../../api/product/index.js'
// import ReactPaginate from 'react-paginate'
// //import { basicColumns, data } from "./data"
// import DataTable from 'react-data-table-component'
// import {
//     Button,
//     UncontrolledTooltip,
//     ButtonGroup,
//     Row,
//     Col,
//     Badge,
//     Card, CardImg, CardText, CardBody, CardLink,
//     CardTitle, CardSubtitle
// } from 'reactstrap'
// import { useNavigate, useLocation } from 'react-router-dom'
// import { Plus, RefreshCcw, MoreVertical, Eye, Edit2, Trash, ChevronDown } from 'react-feather'
// import ProductForm from './ProductForm.js'

// import { useDispatch, useSelector } from "react-redux"

// const Product = () => {

//     const [formModal, setFormModal] = useState(false)
//     const [modal, setModal] = useState(false)
//     const [currentPage, setCurrentPage] = useState(0)
//     const [s, setS] = useState(false)
//     const [data1, setData1] = useState([])
//     const [editData, setEditData] = useState(null)
//     const [item, setItem] = useState([])
//     const navigate = useNavigate()
//     const dispatch = useDispatch()

//     const products = useSelector(state => state)
//     console.log("hello", products)

//     const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

//     const status = {
//         1: { title: 'Current', color: 'light-primary' },
//         2: { title: 'Professional', color: 'light-success' },
//         3: { title: 'Rejected', color: 'light-danger' },
//         4: { title: 'Resigned', color: 'light-warning' },
//         5: { title: 'Applied', color: 'light-info' }
//     }
//     const data = [{
//         id: "1",
//         name: "rames",
//         title: "abc"
//     }]

//     // useEffect(() => {
//     //     dispatch(loadProduct())
//     // }, [])

//     useEffect(() => {
//         (async () => {
//             const result = await axios.get('http://localhost:5000/Product')
//             setData1(result.data)

//         })()
//     }, [])
//     console.log("...", data1)

//     const customStyles = {
//         title: {
//             style: {
//                 fontColor: 'red',
//                 fontWeight: '900'
//             }
//         },
//         rows: {
//             style: {
//                 minHeight: '72px'// override the row height
//             }
//         },
//         headCells: {
//             style: {
//                 fontSize: '20px',
//                 fontWeight: '500',
//                 textTransform: 'captilize',
//                 paddingLeft: '0 8px'
//                 // background: "orange"
//             }
//         },
//         cells: {
//             style: {
//                 fontSize: '17px',
//                 paddingLeft: '0 8px'
//             }
//         }
//     }

//     const basicColumns = [
//         {
//             name: ("#"),
//             selector: (row, i) => (row.id ? (i + 1) : null),
//             maxWidth: "10px"

//         },

//         {
//             name: 'product-name',
//             allowOverflow: true,
//             minWidth: '250px',
//             //center: true,
//             // style: {
//             //    background: "orange",
//             //
//             //  },
//             selector: row => row?.name


//         },

//         {
//             name: 'Actions',
//             allowOverflow: true,
//             //center: true,
//             size: "sm",
//             cell: row => {
//                 return (
//                     <ButtonGroup>
//                         <UncontrolledTooltip placement='top' id='edit' target='edit'>
//                             {("edit")}
//                         </UncontrolledTooltip>
//                         <div className='d-flex' id='edit' >
//                             {/* <Edit size={15}
//                                 onClick={() => {
//                                     setAdd(row)
//                                     setEditData(data)
//                                     setAdd1(true)

//                                 }}
//                             /> */}

//                         </div>
//                     </ButtonGroup>
//                 )
//             }
//         }
//     ]

//     const handleImport = () => setFormModal(!formModal)
//     // const handleImport1 = () => setS(!s)
//     const handlePagination = page => {
//         setCurrentPage(page.selected)
//     }
//     const location = useLocation()
//     // console.log("..", window.location)
//     const CustomPagination = () => (
//         <ReactPaginate
//             nextLabel=''
//             breakLabel='...'
//             previousLabel=''
//             pageRangeDisplayed={2}
//             forcePage={currentPage}
//             marginPagesDisplayed={10}
//             activeClassName='active'
//             pageClassName='page-item'
//             breakClassName='page-item'
//             nextLinkClassName='page-link'
//             pageLinkClassName='page-link'
//             breakLinkClassName='page-link'
//             previousLinkClassName='page-link'
//             nextClassName='page-item next-item'
//             previousClassName='page-item prev-item'
//             pageCount={Math.ceil(data.length / 7) || 1}
//             onPageChange={page => handlePagination(page)}
//             containerClassName='pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1'
//         />
//     )
//     return (<>
//         <div>
//             <ProductForm show={formModal} edit={editData} handleModal={handleImport} />
//             <Row className="align-items-center mb-2">
//                 <Col className="d-flex align-items-center">
//                     <h2 className={classNames("content-header-title float-left mb-0 text-primary")}>
//                         Product Detail
//                     </h2>
//                 </Col>

//                 <Col className="d-flex justify-content-end ">
//                     <UncontrolledTooltip placement='top' id='add' target='add'>
//                         {("CreateNew")}
//                     </UncontrolledTooltip>
//                     <ButtonGroup>

//                         <Button id="add" className='btn btn-outline-primary' size="sm"
//                             onClick={() => {
//                                 setFormModal(!formModal)
//                                 setEditData(null)
//                             }}
//                         >
//                             <Plus size="14" />
//                         </Button>
//                         <Button size="sm" color="dark" id="reload" className='btn btn-outline-primary' >
//                             <RefreshCcw size="14" />
//                         </Button>
//                     </ButtonGroup>
//                 </Col>
//             </Row>
//             <div className='react-dataTable'>
//                 <DataTable
//                     noHeader
//                     pagination
//                     // selectableRows
//                     columns={basicColumns}
//                     paginationPerPage={7}
//                     className='react-dataTable'
//                     sortIcon={<ChevronDown size={10} />}
//                     paginationDefaultPage={currentPage + 1}
//                     paginationComponent={CustomPagination}
//                     data={data}
//                     customStyles={customStyles}

//                 // selectableRowsComponent={BootstrapCheckbox}
//                 />
//             </div>

//         </div >
//     </>)
// }

// export default Product

import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { ChevronDown, Edit2, Edit, Eye, EyeOff, Plus, RefreshCcw, Sliders, Trash2, Trash } from 'react-feather'
import { useForm } from 'react-hook-form'
import ReactPaginate from 'react-paginate'
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup, Card, CardHeader, CardTitle, Col, UncontrolledTooltip, Row } from 'reactstrap'
import { formatDateTimeByFormat } from '../../utility/Utils'
import Shimmer from '../../component/shimmers/Shimmer'
import BsTooltip from '../../component/tooltip'
import Show from '../../utility/Show'
import ProductForm from './ProductForm'
const Product = () => {
    const [loading, setLoading] = useState(false)
    const [formModal, setFormModal] = useState(false)
    const [rowsPerPage, setRowsPerPage] = useState("2")
    const [add, setAdd] = useState(null)
    const [editData, setEditData] = useState(null)
    const handleImport = () => setFormModal(!formModal)
    const data = [
        {
            id: 1,
            name: "potato",
            quanitity: 5,
            unit: "kg",
            price: 50,
            description: "best qualty",
            type: "1"
        },
        {
            id: 2,
            name: "tomato",
            quanitity: 3,
            unit: "kg",
            price: "60",
            description: "best qualty",
            type: "1"
        }
    ]



    const ProductColumn = [
        {
            name: ("#"),
            selector: (row, i) => (row.id ? (i + 1) : null),
            maxWidth: "10px"

        },


        {
            name: "product",
            selector: 'name',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: "quanitity",
            selector: 'quanitity',
            sortable: true,
            minWidth: '150px'
        },

        {
            name: " unit",
            selector: 'unit',
            sortable: true,
            minWidth: '150px'
            // cell: row => {
            //     return (
            //         <>

            //         </>
            //     )
            // }
        },
        {
            name: " price(Rs)",
            selector: 'price',
            sortable: true,
            minWidth: '150px'
        },

        {
            name: "type",
            selector: 'type',
            sortable: true,
            minWidth: '150px',
            cell: row => {
                return (
                    <>
                        {row?.type === "1" ? 'In' : 'Out'}
                    </>
                )
            }
        },
        // {
        //     name: ("date"),
        //     selector: ({ value }) => {
        //         return value !== null ? formatDateTimeByFormat(value, "YYYY-MM-DD") : ""
        //     },
        //     sortable: true,
        //     minWidth: '150px'
        // },
        {
            name: ("actions"),
            allowOverflow: true,
            minWidth: "70px",
            cell: row => {

                return (<ButtonGroup>

                    <UncontrolledTooltip placement='top' id='view' target='view'>
                        {("view")}
                    </UncontrolledTooltip>
                    <div className='d-flex m-2' id='view' >
                        <Eye size={18}
                            onClick={() => {
                                // setAdd(row)
                                // setEditData(data)
                                // setFormModal(!formModal)

                            }}

                        />
                    </div>
                    <UncontrolledTooltip placement='top' id='edit' target='edit'>
                        {("edit")}
                    </UncontrolledTooltip>
                    <div className='d-flex m-2' id='edit' >
                        <Edit size={18}
                            onClick={() => {
                                setAdd(row)
                                setEditData(data)
                                setFormModal(!formModal)

                            }}
                        />
                    </div>
                    <UncontrolledTooltip placement='top' id='delete' target='delete'>
                        {("delete")}
                    </UncontrolledTooltip>
                    <div className='d-flex text-danger m-2' id='delete' >
                        <Trash2 size={18}
                            onClick={() => {
                                // setAdd(row)
                                // setEditData(data)
                                // setAdd1(true)

                            }}
                        />
                    </div>



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
            <ProductForm show={formModal} show1={add} edit={editData} handleModal={handleImport} />
            {/* <Card> */}
            <CardHeader className='border-bottom inline  '>
                <Row>
                    <Col md='11' xs={8}>
                        <CardTitle className='text-primary' tag='h4'>Product Info</CardTitle>

                    </Col>
                    <Col md='1' xs={4}>
                        <ButtonGroup>
                            <UncontrolledTooltip target="create-button">create-new</UncontrolledTooltip>
                            <Button id='create-button' color="primary"
                                onClick={() => {
                                    setFormModal(!formModal)
                                    setEditData(null)
                                }}
                            >

                                <Plus size={18} />
                            </Button>
                            <UncontrolledTooltip target="reload">Filter</UncontrolledTooltip>
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
                        columns={ProductColumn}
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


export default Product





