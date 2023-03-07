import React from "react";
import classes from "./Card.module.css";
import banner from "./banner.png";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={`products/${props.category}`}>
      <div className={classes.main}>
        <div className={classes.content}>
          <span className={classes.large}>{props.heading ? props.heading : "Headphones"}</span>
          <span className={classes.medium}>{props.subHeading ? props.subHeading :"New Arrivals"}</span>
        </div>
        <div className={classes.image}>
          <img className={classes.actualImage} src={props.banner ? props.banner : banner} alt="" />
        </div>
      </div>
      </Link>
  );
};

export default Card;
