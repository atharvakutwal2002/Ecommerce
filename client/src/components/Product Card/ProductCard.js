import React from "react";

import classes from "./ProductCard.module.css";
import img from "./download.jfif";
import { useNavigate } from "react-router-dom";

const ProductCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className={classes.main}>
      <div className={classes.image}>
        <img
          className={classes.actualImage}
          src={
            props.img
              ? props.img
              : "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/a78da6b8-689c-40f3-9c50-bcb4998c5f2a_600x.png?v=1625045618"
          }
          alt=""
        />
      </div>
      <div className={classes.content}>
        <span className={classes.title}>
          {props.name ? props.name : "boAt Airdopes 381"}
        </span>
        <span className={classes.price}>
          $ {props.price ? props.price : 1999}
        </span>
        <span></span>
      </div>
      <button
        onClick={(e) => {
          navigate(
            `/product/${props.id ? props.id : "6405e737c8e87304f9777d1e"}`
          );
        }}
        className={classes.button}
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
