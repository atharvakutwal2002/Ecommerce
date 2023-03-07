import React from "react";
import classes from "./Header.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.main}>
      <div
        onClick={(e) => {
          navigate("/");
        }}
        className={classes.logo}
      >
        ShopperStop
      </div>
      <div
       
        className={classes.links}
      >
        <span  onClick={(e) => {
          if (localStorage.getItem("token")) {
            navigate(`/cart/${localStorage.getItem("userId")}`);
          } else {
            navigate("/login");
          }
        }} className={classes.link}>
          <AiOutlineShoppingCart />
        </span>
        <span
          onClick={(e) => {
            if (localStorage.getItem("token")) {
              navigate("/profile");
            } else {
              navigate("/login");
            }
          }}
          className={classes.link}
        >
          <CgProfile />
        </span>
      </div>
    </div>
  );
};

export default Header;
