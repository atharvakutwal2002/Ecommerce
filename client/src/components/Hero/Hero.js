import React from "react";
import classes from "./Hero.module.css";
import banner from './banner.png'

const Hero = () => {
  return (
    <div className={classes.main}>
      <div className={classes.gradient}></div>
      <div className={classes.banner}><img className={classes.actualImage} src={banner} alt="" /></div>
      <div className={classes.content}>
        <span className={classes.medium}>Bo<b>A</b>t Collection 2023</span>
        <span className={classes.Large}>New Arrival</span>
        <span className={classes.button}>Shop Now</span>
      </div>
    </div>
  );
};

export default Hero;
