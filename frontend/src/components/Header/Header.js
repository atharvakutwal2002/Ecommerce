import React, { useState } from "react";
import "./Header.css";
import CartButton from "../Cart/CartButton/CartButton";
import Cart from "../Cart/Cart";

function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  


  const loggin = (
    <a className="link" href="#">
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
          {isLoggedIn ? <CartButton onClick={props.onShowCart}/> : loggin}
          {/* <CartButton onClick={props.onShowCart}/> */}
        </div>

        

      </div>
    </div>
  );
}

export default Header;
