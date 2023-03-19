import React from "react";
import classes from "./Card.module.css";
import { useNavigate } from "react-router-dom";

import { BiLinkExternal } from "react-icons/bi";

const Card = (props) => {
    const navigate= useNavigate();
  return (
    <div className={classes.main}>
      <div className={classes.items}>
        {props.items.map((p, i) => {
          return (
            <div className={classes.productCard} key={i}>
              <img className={classes.image} src={p.image} alt="" />
              <span className={classes.name}>{p.name}</span> <span className={classes.price}>₹ {p.price}</span>{" "} <span onClick={e=>{
                navigate(`/product/${p.productId}`)
              }} className={classes.link}><BiLinkExternal/></span>
              <span className={classes.quantity}>Qty {p.quantity}</span>{" "}
            </div>
          );
        })}
      </div>
      <div>
        <span> Total ₹ {props.bill}</span>
      </div>
    </div>
  );
};

export default Card;
