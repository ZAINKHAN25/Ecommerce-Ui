import React from 'react';
import CustomerCard from '../CustomerCard/index.jsx';
import "./app.css"

function CustomerReviews() {
    return (
        <div className='text-center py-5 px-2'>
            <h1 className='mt-5 mb-2'>Our Customers speak for us</h1>
            <div className='customercards my-5 px-3'>
                <CustomerCard data={{
                    description: `I love shopping at Dejee's Store. They offer a wide variety of traditional Pakistani clothing at affordable prices. Their customer service is excellent, and their products are of the highest quality.`,
                    img: "https://10web-site.ai/21/wp-content/uploads/sites/23/2023/08/recycled-shoe-store-customer-avatar-image-3_aL7ec8hl.webp",
                    customerName: "Abid"
                }} />
                <CustomerCard data={{
                    description: `I highly recommend Dejee's Store for all your traditional Pakistani clothing needs. Their products are affordable and of the highest quality. Their customer service is excellent, and they offer fast and reliable shipping.`,
                    img: "https://10web-site.ai/21/wp-content/uploads/sites/23/2023/08/recycled-shoe-store-customer-avatar-image-2_aL7ec8hl.webp",
                    customerName: "Kamran"
                }} />
                <CustomerCard data={{
                    description: `I recently purchased a Kameez from Dejee's Store, and I couldn't be happier. The product arrived on time and was of the highest quality.`,
                    img: "https://10web-site.ai/21/wp-content/uploads/sites/23/2023/08/recycled-shoe-store-customer-avatar-image-1_aL7ec8hl.webp",
                    customerName: "Shazia"
                }} />
            </div>
            <h5>4.8 average rating from 1814 reviews</h5>
        </div>
    )
}

export default CustomerReviews;
