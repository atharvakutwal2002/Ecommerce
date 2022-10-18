import React, { useContext } from "react";
import CartContext from "../../../Store/new-cart-context";
import "./CartItem.css";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const removeItemHandler = () => {
    cartCtx.removeItem(props.id);
  };
  return (
    <div className="cartItem">
      <h3>{props.heading}</h3>
      <div className="cartItemImgDiv">
        <img className="cartItemImg" src={props.link} alt="" />
      </div>
      <h2>$ {props.price}</h2>
      <button className="removeCartItemButton" onClick={removeItemHandler}>Remove</button>
    </div>
  );
};

export default CartItem;
