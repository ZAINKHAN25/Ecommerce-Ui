import React from 'react';
import './App.css'

function CardOne({ data }) {
    const { imgurl, cardheading, cardprice, previousPrice } = data;
    return (
        <div className='CardOne mx-2'>
            <img src={imgurl} alt="" />
            <h5 className='mt-4'>{cardheading}</h5>
            <span>
                <span className='me-2 previousPrice'><del>{previousPrice && (`$${previousPrice}`)}</del> </span>
                <span>${cardprice}</span>
            </span>
            <div className="inputfieldofcardone my-2">
                <div className="input-group mb-3">
                    <span className="input-group-text">-</span>
                    <span className="input-group-text">1</span>
                    <span className="input-group-text">+</span>
                </div>
            </div>
            <span className='addtocardone'>Add to cart</span>
            {previousPrice &&
                (<div className='saleofcardone p-2'>
                    Sale!
                </div>)
            }
        </div>
    )
}

export default CardOne