import React from 'react'
import classes from './Card.module.css'
import men from './men.png'



const Card = () => {
  return (
    <div className={classes.main}>
        <div className={classes.content}>
            <span className={classes.large}>Men</span>
            <span className={classes.medium}>Spring 2023</span>
        </div>
        <div className={classes.image}>
            <img  src={men} alt="" />
        </div>
    </div>
  )
}

export default Card