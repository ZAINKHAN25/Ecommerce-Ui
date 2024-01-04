import React from 'react';
import './App.css';
import CardOne from "../CardOne/App.jsx"

function Sales() {
    return (
        <div className='Sales p-5'>
            <div className="firstlineofSale">
                <span>Sales</span>
                <span className='borderBotom'>VIEW ALL BEST SELLERS</span>
            </div>
            <div className="secondlineSales d-flex">
                <CardOne data={
                    {
                        imgurl: "https://10web-site.ai/21/wp-content/uploads/sites/23/2023/12/recycled-shoe-product-image-002_nyNRn6iu.webp",
                        cardheading: "Shalwar",
                        cardprice: "71.00"
                    }
                } />
                <CardOne data={
                    {
                        imgurl: "https://10web-site.ai/21/wp-content/uploads/sites/23/2023/12/recycled-shoe-product-image-015_nyNRn6iu.webp",
                        cardheading: "Kameez",
                        cardprice: "12.00"
                    }
                } />
                <CardOne data={
                    {
                        imgurl: "https://10web-site.ai/21/wp-content/uploads/sites/23/2023/12/recycled-shoe-product-image-005_nyNRn6iu.webp",
                        cardheading: "Kurta",
                        cardprice: "71.00",
                        previousPrice: "80.00"
                    }
                } />
            </div>
        </div>
    )
}

export default Sales