import React from 'react';

import CardTwo from "../CardTwo/App.jsx"
import "./App.css";

function Categories() {
  return (
    <div className='Categories my-3'>
      <CardTwo data={{
        imgurl: "https://i.pinimg.com/736x/fb/1f/25/fb1f25a5008d56ed48fb29f296649fc6.jpg",
        heading: "J.",
        subheading: "Kameez"
      }} />
      <CardTwo data={{
        imgurl: "https://cdn.shopify.com/s/files/1/0609/6188/2275/products/051A3316.jpg?v=1679170494",
        heading: "HSY",
        subheading: "Kurta"
      }} />
    </div>
  )
}

export default Categories;