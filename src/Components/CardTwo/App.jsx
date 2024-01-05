import React from 'react';
import './App.css'

function CardTwo({ data }) {
  const { imgurl, heading, subheading } = data;
  return (
    <div style={{ background: `lightblue url(${imgurl}) no-repeat center` }} className='CardTwo mx-2'>
      <h1>{heading}</h1>
      <h3 className='px-3 py-2'>{subheading}</h3>
    </div>
  )
}

export default CardTwo;