import React, { useState } from "react";
import classes from "./Card.module.css";
import { removeFromCart } from "../../../API/EcommerceApi";
import { useNavigate } from "react-router-dom";
import Loader from "../../../utils/Loader/Loader";

const Card = (props) => {
  const navigate = useNavigate();
  const [loading, setLoading]= useState(false);

  const onRemoveItem = async () => {
    setLoading(true);
    const obj = { productId: props.productId };
    

    const res = await removeFromCart(obj);
    console.log(res);
    if (res.status === 201) {
      setLoading(false);
      window.location.reload(false);
      
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.imgDiv}>
        <img className={classes.actualImg} src={props.image} alt="" />
      </div>
      <div className={classes.content}>
        <span className={classes.name}>{props.name}</span>
        <div>
          <div className={classes.flex}>
            <span>Price</span>
            <span>{props.price}</span>
          </div>
          <div className={classes.flex}>
            <span>Quantity</span>
            <span>{props.quantity}</span>
          </div>
          <div className={classes.flex}>
            <span>Total</span>
            <span>{props.quantity * props.price}</span>
          </div>
          <div onClick={onRemoveItem} className={classes.button}>
            Remove Item
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
