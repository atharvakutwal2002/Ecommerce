import React from "react";
import classes from "./Footer.module.css";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className={classes.main}>
      <span className={classes.logo}>ShopperStop</span>
      <span className={classes.mid}>Made by Atharva with ❤</span>
      <div className={classes.links}>
        <a className={classes.link} href="#">
          <AiOutlineInstagram />
        </a>
        <a className={classes.link} href="#">
          <AiOutlineTwitter />
        </a>
        <a className={classes.link} href="#" >
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
