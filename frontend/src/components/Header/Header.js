import React, { useContext } from "react";
import "./Header.css";
import CartButton from "../Cart/CartButton/CartButton";
import LoginContext from "../../Store/login-context";

function Header(props) {
  const logCtx = useContext(LoginContext);
  const loggin = (
    <a onClick={props.onShowSignUpForm} className="link" href="#">
      Login / signup
    </a>
  );
  const loggOut = (
    <a onClick={props.onShowSignUpForm} className="link" href="#">
      LogOut
    </a>
  );

  return (
    <div className="header">
      <h1 className="heading">Ecommerce</h1>
      <div className="links">
        <CartButton onClick={props.onShowCart} />
        {logCtx.isLoggedIn ? loggOut : loggin}
      </div>
    </div>
  );
}

export default Header;
