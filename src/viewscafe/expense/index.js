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
import ExpenseModal from './ExpenseModal'

import DropDownMenu from '../../component/dropdownManu'




const Expense = () => {




    const [loading, setLoading] = useState(false)

    // const [rowsPerPage, setRowsPerPage] = useState("2")
     const [edit, setedit ]=useState([])

   const[Open, setOpen]=useState(false)
   const handerClose=()=>setOpen(false)
   const handerOpen=()=>setOpen(true)
   const  handlerShow =()=>{
         setOpen(!Open)
   }


   const edithandler=(row)=>{
           setedit(row.data)
           
   }
    const data = [
        {  
            id:1,
           description:'this is best samosa',
            income: '2000',
            expense: '500',
            total:'1000000'

        },
        {
            id:2,
            description:'this is best samosa',
            income: '2000',
            expense: '500',
            total:'1000000'

        },
        {
            id:3,
            description:'this is best samosa',
            income: '2000',
            expense: '500',
            total:'1000000'

        },
        {
            id:4,
            description:'this is best samosa',
            income: '2000',
            expense: '500',
            total:'1000000'

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
            name: "description",
            selector: 'description',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: "Investment",
            selector: 'Investment',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: "Expense",
            selector: 'expense',
            sortable: true,
            minWidth: '150px'
        },
        {
            name: "Saving",
            selector: 'saving',
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

            {/* <Card> */}
              <ExpenseModal Open={Open} handerClose={handerClose} handerOpen={handerOpen} />  
            <CardHeader className='border-bottom inline  '>
                <Row>
                    <Col md='11' xs={8}>
                        <CardTitle className='text-primary' tag='h4'>expense</CardTitle>

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


export default Expense