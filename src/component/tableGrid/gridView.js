import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
// import { log } from '../../../utility/helpers/common'

const GridView = ({ gridView = () => { }, data = null, loading, shimmer, gridCol = "4" }) => {

    const shimmerShow = () => {
        const ss = []
        for (let i = 1; i < 25; i++) {
            ss.push(<Col md={gridCol} key={`${i}-shimmer`}>
                <Card>
                    <CardBody className="p-0">
                        {shimmer}
                    </CardBody>
                </Card>
            </Col>)
        }
        return ss
    }
    if (loading) {
        return (
            <Row>
                {shimmerShow()}
            </Row>
        )
    } else {
        return (
            <>

                {
                    data?.data.data ?
                        <Row key={"row-of-grid"}>
                            {

                                data?.data?.data?.map((item, index) => {
                                    return (
                                        <>
                                            <Col key={`${item.id}-grid-single`} className='grid d-flex align-items-stretch' md={gridCol}>
                                                {gridView(item, index)}
                                            </Col>
                                        </>
                                    )
                                })

                            }
                        </Row> :
                        <Row key={"row-of-grid"}>
                            {

                                data?.data?.map((item, index) => {
                                    return (
                                        <>
                                            <Col key={`${item.id}-grid-single`} className='grid d-flex align-items-stretch' md={gridCol}>
                                                {gridView(item, index)}
                                            </Col>
                                        </>
                                    )
                                })

                            }
                        </Row>

                }
                <div id="theEnd"></div>
            </>
        )
    }
}

export default GridView