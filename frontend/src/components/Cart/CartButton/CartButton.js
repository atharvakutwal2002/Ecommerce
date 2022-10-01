import React from "react";
import { useContext } from "react";
import CartContext from "../../../Store/cart-context";
import CartIcon from "./CartIcon";
import "./CartButton.css";

const CartButton = (props) => {
  const cartctx = useContext(CartContext);
  const numberOfCartItems = cartctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
