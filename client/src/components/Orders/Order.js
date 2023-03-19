import React, { useEffect, useState } from "react";
import classes from "./Order.module.css";
import { getOrders } from "../../API/EcommerceApi";
import Loader from "../../utils/Loader/Loader";
import Card from "./Card/Card";

const Order = () => {
  const [userorders, setUserOrders] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  useEffect(() => {
    getOrders().then((res) => {
      setUserOrders(res.data.userOrders);
      setIsLoading(false);
      console.log(res.data.userOrders);
    });
  }, []);
  return (
    <div>
      <div className={classes.orders}>
        <span className={classes.heading}>Orders</span>
        {isLoading ? <Loader/>
        : userorders.map((p,i)=>{
          return <Card bill={p.bill} items={p.items}/>
        })}
      </div>
    </div>
  );
};

export default Order;
