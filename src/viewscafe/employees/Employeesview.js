import React from 'react'
import 'bootstrap';
import 
import navigation from "../../navigation/index";

const Employeesview = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                {navigation.map((navi, index) =>
                    navi?.href === "/employees" ? <div key={index} className='d-flex align-items-center col'><i className={navi.icon}></i> <h2>{navi.title}</h2></div> : null
                )}
            </div>
            <div className='col'>

            </div>

        </div>
    )
}

export default Employeesview

