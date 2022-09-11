import React from "react";
import './Header.css'

function Header() {
  return (
    <div className="header">
      <h1 className="heading">Ecommerce</h1>
      <div className="links">
        <a className="link" href="#">Home</a>
        <a className="link" href="#">Contact</a>
      </div>
    </div>
  );
}

export default Header;
