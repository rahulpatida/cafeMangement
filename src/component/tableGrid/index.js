import { isEmptyObject } from 'jquery'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardBody, Col, Row } from 'reactstrap'
import {log } from '../../utility/helpers/common'

import GridShimmer from './gridShimmer'
import GridView from './gridView'


const TableGrid = ({
    columns, force = false, selector = "user", refresh = false, isRefreshed = () => { }, gridView = () => { }, state = null, gridCol = "4", jsonData = null, params = null, loadFrom = () => { }, display = "grid", shimmer = null
}) => {
    const selected = useSelector(s => s[selector])
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(25)
    const [loading, setLoading] = useState(false)

    const getCounts = () => {
        let re = 0
        if (!isEmptyObject(selected[state])) {
            const data = selected[state]
            if (data) {
                re = Math.ceil((data?.total / parseInt(data?.per_page)))
            }
        }
        // log(re, "re")
        return re
    }

    // useEffect(() => {
    //     if (state && force) {
    //         if (selected[state]?.data?.length === 0 || force) {
    //             loadFrom({ page, perPage, jsonData, params, loading: (l) => { setLoading(l) }, dispatch })
    //         }
    //     }
    // }, [force])

    useEffect(() => {
        if (state) {
            if (!isEmptyObject(selected[state]) && refresh) {
                log("refreshing")
                loadFrom({ page, perPage, jsonData, params, loading: (l) => { setLoading(l); isRefreshed(false) }, dispatch })
            }
        }
    }, [refresh])

    useEffect(() => {
        if (state && page > 0) {
            if (!isEmptyObject(selected[state])) {
                log("paging")
                loadFrom({ page, perPage, jsonData, params, loading: (l) => { setLoading(l) }, dispatch })
            }
        }
    }, [page, perPage])


    if (state) {
        if (display === "grid") {
            return (
                <>
                    <GridView gridView={gridView} columns={columns} gridCol={gridCol} data={selected[state]} loading={loading} shimmer={shimmer ? shimmer : <GridShimmer />} />
                    {
                        (!loading && selected[state]?.data?.length === 0) ? <>
                            <div className='d-flex justify-content-center my-2'> {("no-record")} </div>
                        </> : null
                    }
                    <Row>
                        <Col xl='12' md='12'>
                            <ReactPaginate
                                initialPage={(parseInt(selected[state]?.current_page) - 1)}
                                disableInitialCallback
                                onPageChange={(page) => { setPage((page?.selected + 1)) }}
                                pageCount={getCounts()}
                                key={(parseInt(selected[state]?.current_page) - 1)}
                                nextLabel={''}
                                breakLabel={'...'}
                                breakClassName='page-item'
                                breakLinkClassName='page-link'
                                activeClassName={'active'}
                                pageClassName={'page-item'}
                                previousLabel={''}
                                nextLinkClassName={'page-link'}
                                nextClassName={'page-item next'}
                                previousClassName={'page-item prev'}
                                previousLinkClassName={'page-link'}
                                pageLinkClassName={'page-link'}
                                containerClassName={'pagination react-paginate justify-content-center'}
                            />
                        </Col>
                    </Row>

                </>
            )
        }
    } else {
        return null
    }

}

export default TableGrid