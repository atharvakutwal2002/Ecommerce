import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[
        { id: "c1", name: "mobile", amount: 2, price: 45000 },
        { id: "c1", name: "mobile", amount: 2, price: 45000 },
        { id: "c1", name: "mobile", amount: 2, price: 45000 },
        { id: "c1", name: "mobile", amount: 2, price: 45000 },
        { id: "c1", name: "mobile", amount: 2, price: 45000 },
        { id: "c1", name: "mobile", amount: 2, price: 45000 },
        { id: "c2", name: "Laptop", amount: 2, price: 100000 },
        { id: "c2", name: "Laptop", amount: 2, price: 100000 },
        { id: "c2", name: "Laptop", amount: 2, price: 100000 },
        { id: "c2", name: "Laptop", amount: 2, price: 100000 },
        { id: "c2", name: "Laptop", amount: 2, price: 100000 },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div className="cartContainer">
      {cartItems}
      <div className="total">
        <span>Total Amount </span>
        <span>145000</span>
      </div>
      <div className="actions">
        <button className="button-alt" onClick={props.onClose}>Close</button>
        <button className="button">Order</button>
      </div>
    </div>
  );
};

export default Cart;
