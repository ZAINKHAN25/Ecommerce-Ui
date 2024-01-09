import React from 'react';
import "./App.css"

function CustomerCard({ data }) {
    return (
        <div className='mx-3 customerreviewcard p-4'>
            <p className='customerdescription'>" {data?.description} "</p>
            <div className='secondlinecustomerreviewcard'>
                <img src={data?.img} alt="" />
                <h5>{data?.customerName}</h5>
            </div>
        </div>
    )
}

export default CustomerCard;