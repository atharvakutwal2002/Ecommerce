import React from "react";
import classes from "./Footer.module.css";
import UpperFooter from "../UpperFooter/UpperFooter";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <UpperFooter/>
    <div className={classes.main}>
      <span
        onClick={(e) => {
          navigate("/");
        }}
        className={classes.logo}
      >
        ShopperStop
      </span>
      <span className={classes.mid}>Made by Atharva with ❤</span>
      <div className={classes.links}>
        <a className={classes.link} href="#">
          <AiOutlineInstagram />
        </a>
        <a className={classes.link} href="#">
          <AiOutlineTwitter />
        </a>
        <a className={classes.link} href="#">
          <AiFillLinkedin />
        </a>
      </div>
    </div>
          </div>
  );
};

export default Footer;
