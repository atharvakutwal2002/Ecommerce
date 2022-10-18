import React from "react";
import { useContext } from "react";

import "./Cart.css";
import CartContext from "../../Store/new-cart-context";
import CartItem from "./cartItem/CartItem.js";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  let totalAmount = 0;
  for (const key of cartCtx.items) {
    totalAmount += key.price;
  }

  return (
    <div className="cartContainer">
      <div className="actualCartItems">
        {cartCtx.items.map((e, key) => (
          <CartItem
            id={e.id}
            key={key}
            link={e.link}
            heading={e.heading}
            price={e.price}
          />
        ))}
      </div>
      <div className="cartDetails">
        {!hasItems && <p>No items in cart </p>}
        {hasItems && (
          <div className="total">
            <span>Total Amount </span>
            <span>{totalAmount}</span>
          </div>
        )}
        <div className="actions">
          <button className="button-alt" onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button onClick={props.onShowAddressInput} className="button">
              Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
