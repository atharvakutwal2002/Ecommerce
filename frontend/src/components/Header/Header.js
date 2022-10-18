import React, { useContext, useState } from "react";
import "./Header.css";
import CartButton from "../Cart/CartButton/CartButton";

import LoginContext from "../../Store/login-context";

function Header(props) {
  
 const logCtx=useContext(LoginContext)
 console.log(logCtx.isLoggedIn)
 
  

  

  const loggin = (
    <a  onClick={props.onShowLoginForm} className="link" href="#">
      Login / signup
    </a>
  );

  return (
    <div className="header">
      <h1 className="heading">Ecommerce</h1>
      <div className="links">
        <a className="link" href="#">
          Home
        </a>
        <a className="link" href="#">
          Contact
        </a>

        <div>
          {false ? <CartButton onClick={props.onShowCart} /> : loggin}
          
          {/* <CartButton onClick={props.onShowCart}/> */}
          
        </div>
      </div>
    </div>
  );
}

export default Header;
