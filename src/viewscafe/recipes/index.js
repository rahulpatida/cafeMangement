
import React, { useState } from 'react'
import { Edit, Eye, MoreVertical, Plus, Sliders, Trash2 } from 'react-feather'
import { Card, CardBody, Row , Col, Label, CardHeader, CardTitle, ButtonGroup, UncontrolledTooltip, Button} from 'reactstrap'
import DropDownMenu from '../../component/dropdownManu'
import ConfirmAlert from '../../utility/helpers/ConfirmAlert'
import ModalRecipesaddup from './RecipesModaladdup'

const Recipes  = () => {
    const [deleted, setDeleted] = useState(false)
    const [failed, setFailed] = useState(false)
    
   const[Open, setOpen]=useState(false)

   const handerClose=()=>setOpen(false)
   const handerOpen=()=>setOpen(true)
   const  handlerShow =()=>{
         setOpen(!Open)
   }
    const data = [
        {   tilte:'Coffee',
            Step1: 'Measure for your brew ratio',
            Step2: ' Grind the coffee',
            Step3:' Boil the water and wait 1 minute',
            Step4: 'Place and wet the filter',
            Step5: 'Place the coffee in the filter',
            Step6: 'Pour and wait ',
            Step7: 'Continue and complete your pour',
            Step8: 'Enjoy your coffee'

        },
        {   tilte:'Coffee',
        Step1: 'Measure for your brew ratio',
        Step2: ' Grind the coffee',
        Step3:' Boil the water and wait 1 minute',
        Step4: 'Place and wet the filter',
        Step5: 'Place the coffee in the filter',
        Step6: 'Pour and wait ',
        Step7: 'Continue and complete your pour',
        Step8: 'Enjoy your coffee'

    },
    {   tilte:'Coffee',
    Step1: 'Measure for your brew ratio',
    Step2: ' Grind the coffee',
    Step3:' Boil the water and wait 1 minute',
    Step4: 'Place and wet the filter',
    Step5: 'Place the coffee in the filter',
    Step6: 'Pour and wait ',
    Step7: 'Continue and complete your pour',
    Step8: 'Enjoy your coffee'

},
{   tilte:'Coffee',
Step1: 'Measure for your brew ratio',
Step2: ' Grind the coffee',
Step3:' Boil the water and wait 1 minute',
Step4: 'Place and wet the filter',
Step5: 'Place the coffee in the filter',
Step6: 'Pour and wait ',
Step7: 'Continue and complete your pour',
Step8: 'Enjoy your coffee'

},

    ]

  return (
   <>
   <ModalRecipesaddup   Open={Open} handerClose={handerClose} handerOpen={handerOpen}   className='overflow-hidden'/>
   <Row>
   <Col md='11' xs={8}>
                        <CardTitle className='text-primary' tag='h4'>Recipes</CardTitle>

                    </Col>
                    <Col md='1' xs={4}>
                        <ButtonGroup>
                            <UncontrolledTooltip target="create-button">create-Recipe</UncontrolledTooltip>
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
 
        <Row className='mt-5'>
           {
            data?.map((item)=>{
                return(
                    <>
         
            <Col md='6' className='  gradient-shadow-white mt- ' >
                <Card>
            {/* <div className='d-flex justify-content-between'> */}
                <CardHeader className='d-flex justify-content-between  gradient-shadow-primary 'style={{ paddingLeft:'10px' }} >
                 <div>
                    <CardTitle className='d-flex justify-content-start text-white' tag='h5'>{item.tilte}</CardTitle>
                 </div>
          
               
                  
             
                  <div className='text-white'>
                     <DropDownMenu  
                       tooltip={(`menu`)}
                       component={
                           <MoreVertical 
                           // color={colors.primary.main}
                           // size={IconSizes.MenuVertical} 
                           size={25}
                           />
                       }
                       options={[
                            {
                              
                               icon: <Eye size={14} />,
                               name: ("view"),
                           //      onClick: () => {
                           //         handlerShow()
                           //          setEdit(row)
                           //      }
                           },
                           {
                               
                               icon:<Edit size={14} />,
                            //    onClick: () => {
                            //        // setShowModal(!showModal)
                            //        handlerShow()
                            //        setEdit(row)
                            //    },
                               name: "edit"
                           },
                       
                        
                         { 
                            // IF: Can(Permissions.employeesDelete) && emp?.id !== user?.id,
                            icon: <Trash2 size={14} />,
                            name: <ConfirmAlert
                                title={("delete-this")}
                                color='text-warning'
                                onClickYes={"hello"}
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

                    </div>
               
                
                </CardHeader>
             {/* <CardBody> */}
                
             <div className='text-center mt-4'>
                     <h6>1:   {item.Step1}</h6>
                     <h6>2:{item.Step2}</h6>
                     <h6>3:{item.Step3}</h6>
                     <h6>4:{item.Step4}</h6>
                     <h6>5:{item.Step5}</h6>
                     <h6>6:{item.Step6}</h6>
                     <h6>7:{item.Step7}</h6>
                     <h6>8:{item.Step8}</h6>
                     </div>
             {/* </CardBody> */}
             
</Card>
            </Col>
                    
            </>
                )
            })
           }
        </Row>
 
   {/* </Card>   */}
   
   
   </>
  )
}

export default Recipes 

// export default Recipes 

// import axios from 'axios'
// import classNames from 'classnames'
// import React, { useCallback, useContext, useEffect, useState } from 'react'
// import Avatar from 'react-avatar'
// import { Edit, Plus, RefreshCcw, Sliders, Users, MoreVertical, Edit3, Delete, Trash2, Eye, Edit2, BookOpen, Send, Lock, MessageSquare, PhoneCall, Mail, Calendar, User, UserCheck, DollarSign, Key, Wind } from 'react-feather'
// import { useForm } from 'react-hook-form'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { Button, ButtonGroup, Card, CardBody, CardHeader, Col, Row, UncontrolledTooltip } from 'reactstrap'
// import { loadProduct } from '../../api/product'
// import TableGrid from '../../component/tableGrid'
// import BsTooltip from '../../component/tooltip'

// // import { IconSizes } from '../../utility/Const'
// // ** Styles
// // import { FM, getInitials, log } from '../../utility/helpers/common'



// // import { loadSalaryDetail } from '../../utility/apis/salary'

// const Recipes = () => {
//     const dispatch= useDispatch()
//     // const product= useSelector((state)=>state)
//     // console.log(product)
//     // const { colors } = useContext(ThemeColors)
//     const [formVisible, setFormVisible] = useState(false)
//     const [edit, setEdit] = useState(null)
//     const [loading, setLoading] = useState(false)

//     const [reload, setReload] = useState(false)
//     const [added, setAdded] = useState([])
//     const showForm = () => {
//         setFormVisible(!formVisible)
//     }

//     const escFunction = useCallback((event) => {
//         if (event.keyCode === 27) {
//             setEdit(null)
//             setFormVisible(false)
//         }

//     }, [])

//     //  const loadProduct = () => {
     
//     //         axios.get(`http://localhost:5000/Product`).then((resp) => {
//     //             console.log("res", resp.data)
//     //            setAdded(resp.data)
//     //         }).catch(error => console.log(error));
   
//     // }

//     useEffect(() => {
//         document.addEventListener("keydown", escFunction, false)

//         return () => {
//             document.removeEventListener("keydown", escFunction, false)
//         }
//     }, [])
  
//    useEffect(()=>{
//     //   loadProduct()
//    },[])
//     const gridViewDetails = (item, index) => {
//        console.log(  'fdjfldjdj',item)
//         return <>
//             <Card className={classNames("")}>
//                 <CardHeader className='border-bottom'>
//                     <div className='flex-1'>
//                         <Row className='align-items-center'>
//                             <Col xs="2">
//                                 <Avatar color='light-primary'
//                                     contentStyles={{
//                                         fontSize: 'calc(20px)',
//                                         width: '100%',
//                                         height: '100%'
//                                     }}
//                                     style={{
//                                         height: 40,
//                                         width: 40,
//                                         borderRadius: 8
//                                     }}
//                                     // content={getInitials(item.name)}
//                                      />
//                             </Col>
//                             <Col xs="8" className=''>
//                                 <h5 className="text-truncate m-0 text-capitalize" title={item?.name}>
//                                     <BsTooltip title={("country")}> <span> {item?.name}</span>  </BsTooltip>
//                                 </h5>

//                                 <p className="text-truncate m-0 text-small-12 fw-bold">
//                                     <BsTooltip title={("currency")}>      <span> {item?.currency}</span>
//                                     </BsTooltip>  </p>
//                             </Col>

//                         </Row>
//                     </div>
//                 </CardHeader>
//                 <CardBody>
                    
//                     {/* <Row className="pt-1">
//                         <Col md="12">
//                             {item?.dial_code ? <div className='info-list'>
//                                 <BsTooltip title={("dial_code")}>
//                                     <span className='me-1'>
//                                         <PhoneCall className='text-primary' size={IconSizes.CardListIcon} />
//                                     </span>
//                                     {item?.dial_code}
//                                 </BsTooltip>
//                             </div> : null}
//                             {item?.currency_code ? <div className='info-list'>
//                                 <BsTooltip title={("currency_code")}>
//                                     <span className='me-1'>
//                                         <Wind className='text-primary' size={IconSizes.CardListIcon} />
//                                     </span>
//                                     {item?.currency_code}

//                                 </BsTooltip>
//                             </div> : null}
//                             {item?.currency_symbol ? <div className='info-list'>
//                                 <BsTooltip title={("currency_symbol")}>
//                                     <span className='me-1'>
//                                         <DollarSign className='text-primary' size={IconSizes.CardListIcon} />
//                                     </span>
//                                     {item?.currency_symbol}
//                                 </BsTooltip>
//                             </div> : null}

//                         </Col>
//                     </Row> */}
//                 </CardBody>
//             </Card></>
//     }

//     return (
//         <>
       
//             {/* <Header icon={<Users size="25" />} Heading={FM("country-list")}>
//                 {/* Tooltips */}
//                 {/* <UncontrolledTooltip target="filter">{FM("filter")}</UncontrolledTooltip>
//                 <ButtonGroup color='dark'>
//                     <UncontrolledTooltip target="create-button">{FM("create-new")}</UncontrolledTooltip>
//                     <UncontrolledTooltip target="reload">{FM("refresh-data")}</UncontrolledTooltip>
//                     <Link to="/companies/create" className='btn btn-outline-dark btn-sm' id="create-button">
//                         <Plus size="14" />
//                     </Link>
//                     <Button.Ripple size="sm" outline color="dark" id="filter">
//                         <Sliders size="14" />
//                     </Button.Ripple>
//                     <Button.Ripple size="sm" outline color="dark" id="reload" onClick={() => { setReload(true) }}>
//                         <RefreshCcw size="14" />
//                     </Button.Ripple>
//                 </ButtonGroup>
//             </Header> */} 

//             {/* Category Types */}
//             <TableGrid
//                 // refresh={reload}
//                 // isRefreshed={setReload}
//                 loadFrom={loadProduct}
//                 selector="product"
//                 state="products"
//                 display="grid"
//                 gridCol="4"
//                 gridView={gridViewDetails}
//             />
//         </>
//     )
// }

