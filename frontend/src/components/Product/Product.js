import React from 'react'
import './Product.css'

function Product(props) {
  return (
    <div className="product">
        <div className="productHeading">{props.heading}</div>
        <div className="image">Image</div>
        <div className="price">{props.price}</div>
        <button className='productButton'>Buy Now</button>
        <button className='productButton'>Add to cart</button>
    </div>
  )
}

export default Product