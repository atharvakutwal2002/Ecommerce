import React from "react";
import classes from "./Hero.module.css";
import banner from './banner.png'

const Hero = () => {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
        <span className={classes.medium}>Mens Collection 2023</span>
        <span className={classes.Large}>New Arrival</span>
        <span className={classes.button}>Shop Now</span>
      </div>
      <div className={classes.banner}><img src={banner} alt="" /></div>
    </div>
  );
};

export default Hero;
