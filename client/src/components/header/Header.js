import React from 'react'
import classes from './Header.module.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className={classes.main}>
        <div className={classes.logo}>ShopperStop</div>
        <div className={classes.links}>
            <span className={classes.link}><AiOutlineShoppingCart/></span>
            <span className={classes.link}><CgProfile/></span>
        </div>
    </div>
  )
}

export default Header