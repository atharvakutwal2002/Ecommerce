import React from "react";

import classes from "./ProductCard.module.css";
import img from "./download.jfif";

const ProductCard = () => {
  return (
    <div className={classes.main}>
      <div className={classes.image}>
        <img className={classes.actualImage} src={img} alt="" />
      </div>
      <div className={classes.content}>
        <span className={classes.title}>Chuck Taylor All Star</span>
        <span className={classes.price}>$ 7400</span>
        <span></span>
      </div>
      <button className={classes.button}>View Details</button>
    </div>
  );
};

export default ProductCard;
