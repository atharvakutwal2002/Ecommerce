import React from "react";
import { useContext } from "react";

import "./Product.css";
import CartContext from "../../Store/new-cart-context";
import LoginContext from "../../Store/login-context";

function Product(props) {
  const logCtx= useContext(LoginContext);
  const cartCtx = useContext(CartContext);
  const submitHandler = (event) => {
    event.preventDefault();
    if (!logCtx.isLoggedIn) {
      console.log("Not Logged in ")
      return;
    }
    // const enteredAmount= amountInputRef.current.value ;
    // const enteredAmountNumber= +enteredAmount;
    const product = {
      id: props.id,
      heading: props.heading,
      price: props.price,
      link: props.link
    };
    cartCtx.addItem(product);

    return product;
  };
  return (
    <div className="product">
      <div className="productHeading">{props.heading}</div>
      <div className="imageContainer"><img className="image" src={props.link} alt="" /></div>
      <div className="price">$ {props.price}</div>
      

      <button className="productButton" onClick={submitHandler}>
        Add to cart
      </button>
    </div>
  );
}

export default Product;
