import React, { useState } from 'react'
import { ChevronDown, Eye, EyeOff, Plus, RefreshCcw, Sliders } from 'react-feather'
import { Button, ButtonGroup, Card, CardHeader, CardTitle, Col, UncontrolledTooltip, Row } from 'reactstrap'
import navigation from "../../navigation/index";
import 'bootstrap';
import EmpModal from './CreateEmpModal';

const Employeesview = () => {
    const [openmodal, setopenModal] = useState(false)
    const handlerShow = () => {
        setopenModal(!openmodal)
    }
    return (
        <div>

            <EmpModal open={openmodal} setopenModal={setopenModal} />
            <CardHeader className='border-bottom inline  '>
                <Row>
                    <Col md='10' xs={8}>
                        <CardTitle className='text-primary' tag='h4'>Employees</CardTitle>
                    </Col>
                    <Col md='2' xs={4}>
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

        </div>
    )
}

export default Employeesview

