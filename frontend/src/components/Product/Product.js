import React from 'react'
import { useRef } from 'react';
import './Product.css'

function Product(props) {
  const submitHandler = event =>{
    event.preventDefault();

  }
  return (
    <div className="product">
        <div className="productHeading">{props.heading}</div>
        <div className="image">Image</div>
        <div className="price">{props.price}</div>
        <button className='productButton'>Buy Now</button>
        <button className='productButton' onClick={submitHandler}>Add to cart</button>
    </div>
  )
}

export default Product