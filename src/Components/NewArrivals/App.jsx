import React from 'react';
import './App.css';
import CardThree from "../CardThree/App.jsx"

function NewArrivals() {
    return (
        <div className='NewArrivals p-5'>
            <div className="firstlineofNewArrival">
                <span>New Arrivals</span>
                <span className='borderBotom'>VIEW ALL BEST SELLERS</span>
            </div>
            <div className="secondlineNewArrivals d-flex">
                <CardThree data={
                    {
                        imgurl: "https://10web-site.ai/21/wp-content/uploads/sites/23/2023/12/recycled-shoe-product-image-002_nyNRn6iu.webp",
                        cardheading: "Shalwar",
                        cardprice: "71.00"
                    }
                } />
                <CardThree data={
                    {
                        imgurl: "https://10web-site.ai/21/wp-content/uploads/sites/23/2023/12/recycled-shoe-product-image-005_nyNRn6iu.webp",
                        cardheading: "Kurta",
                        cardprice: "71.00",
                        previousPrice: "80.00"
                    }
                } />
                < CardThree data={
                    {
                        imgurl: "https://10web-site.ai/21/wp-content/uploads/sites/23/2023/12/recycled-shoe-product-image-015_nyNRn6iu.webp",
                        cardheading: "Kameez",
                        cardprice: "12.00"
                    }
                } />
            </div>
        </div>
    )
}

export default NewArrivals;