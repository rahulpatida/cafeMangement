// import React from 'react'

// const Category = () => {
//   return (
//     <div>index</div>
//   )
// }

// export default Category
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { ChevronDown, Edit, Eye, EyeOff, MoreVertical, Plus, RefreshCcw, Sliders, Trash2 } from 'react-feather'
import { useForm } from 'react-hook-form'
import ReactPaginate from 'react-paginate'
import { useHistory } from 'react-router-dom'
import { Button, ButtonGroup, Card, CardHeader, CardTitle, Col, UncontrolledTooltip, Row } from 'reactstrap'
import { formatDateTimeByFormat } from '../../utility/Utils'
import Shimmer from '../../component/shimmers/Shimmer'
import BsTooltip from '../../component/tooltip'
import Show from '../../utility/Show'
import AddupModal from './AddupModal'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import DropDownMenu from '../../component/dropdownManu'
import ConfirmAlert from '../../utility/helpers/ConfirmAlert'
import { deletcategory } from '../../api/category'





const  Category = () => {

const dispatch= useDispatch()


    const [loading, setLoading] = useState(false)

    // const [rowsPerPage, setRowsPerPage] = useState("2")
    const [edit, setEdit] = useState([])
    const [view, setView] = useState([])
    const [deleted, setDeleted] = useState(false)
    const [failed, setFailed] = useState(false)
    const [Open, setOpen] = useState(false)
    const [show, setshow] = useState(false)
    const handerClose = () => setOpen(false)
    const handerOpen = () => setOpen(true)
    const handlerShow = () => {
        setOpen(!Open)
    }
    const handlerShow1 = () => {
        setOpen(!show)
    }

    const edithandler = (row) => {
        setEdit(row.data)

    }
    const data = [
        {
            id: 1,
            category:'tea'

        },
        {
            id: 2,
            category:'bread'

        },
        {
            id: 3,
            category:'coffee'
        

        },
        {
            id: 4,
            category:'milk'

        },

    ]



    const ManuColumn = [

        {

            name: ("#"),
            selector: (row, i) => (row.id ? (i + 1) : null),
            maxWidth: "10px"

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
             name: "category",
             selector: 'category',
             sortable: true,
             minWidth: '150px'
         },

      


        {
            name: ("actions"),
            allowOverflow: true,
            minWidth: "70px",
            cell: row => {

                return (
                    // <ButtonGroup >
                    //     {/* <Hide IF={row?.file === null}> */}
                    //     {/* {row?.data !== null ? <BsTooltip className="ms-1" Tag={"a"} role={"button"} target={"_blank"} href={row?.file} title={("View")}>
                    //         <Eye size="18" />
                    //     </BsTooltip> : <BsTooltip className="ms-1" Tag={"a"} role={"button"} title={("no-View")}>
                    //         <EyeOff size="18" />
                    //     </BsTooltip>} */}
                    //     {/* </Hide> */}
                    //     <UncontrolledTooltip target="View-Manu">View-Manu</UncontrolledTooltip>
                    //         <Button id='View-Manu'

                    //         //  onClick={edithandler(row)}

                    //         >

                    //             <Eye size={18} />
                    //         </Button>
                    // </ButtonGroup>
                    <DropDownMenu
                        tooltip={(`menu`)}
                        component={
                            <MoreVertical
                            // color={colors.primary.main}
                             size={18} 
                            />
                        }
                        options={[
                            {

                                icon: <Eye size={14} />,
                                name: ("view"),
                                // onClick: () => {
                                //     handlerShow1()
                                //      setView(row)
                                // }
                            },
                            // {

                            //     icon: <Edit size={14} />,
                            //     onClick: () => {
                            //         handlerShow()
                            //         setEdit(row)
                            //      },
                            //     name: "edit"
                            // },
                            // {

                            {

                                // IF: Can(Permissions.employeesDelete) && emp?.id !== user?.id,
                                icon: <Trash2 size={14} />,
                                name: <ConfirmAlert
                                    title={("delete-this")}
                                    color='text-warning'
                                    // onClickYes={dispatch(deletcategory(row.id))}
                                    // onClickYes={() => deleteUser({ id: user?.id, dispatch, loading: setLoading, success: setDeleted, error: setFailed })}
                             
                                    onSuccess={deleted}
                                    onFailed={failed}
                                    // onClose={() => { setDeleted(null); setFailed(null) }}
                                    className=""
                                // id={`grid-delete-${user?.id}`}
                                >
                                    {"delete"}
                                </ConfirmAlert>


                            }
                        ]}
                    />
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

          <AddupModal Open={Open} handerClose={handerClose} handerOpen={handerOpen} edit={view}  handlerShow ={ handlerShow } />
           
            <CardHeader className='border-bottom inline  '>
                <Row>
                    <Col md='11' xs={8}>
                        <CardTitle className='text-primary' tag='h4'> Category</CardTitle>

                    </Col>
                    <Col md='1' xs={4}>
                        <ButtonGroup>
                            <UncontrolledTooltip target="create-button">create-category</UncontrolledTooltip>
                            <Button id='create-button'

                                 onClick={handlerShow}
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


export default  Category