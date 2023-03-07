import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
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
        </div>
      </div>
    </div>
  );
};

export default Card;
