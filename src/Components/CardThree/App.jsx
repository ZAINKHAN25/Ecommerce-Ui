import React from 'react';
import './App.css'

function CardThree({ data }) {
    const { imgurl, cardheading, cardprice, previousPrice } = data;
    return (
        <div className='CardThree mx-2'>
            <img src={imgurl} alt="" />
            <h5 className='mt-4'>{cardheading}</h5>
            <span>
                <span className='me-2 previousPrice'><del>{previousPrice && (`$${previousPrice}`)}</del> </span>
                <span>${cardprice}</span>
            </span>
            {previousPrice &&
                (<div className='saleofCardThree p-2'>
                    Sale!
                </div>)
            }
        </div>
    )
}

export default CardThree