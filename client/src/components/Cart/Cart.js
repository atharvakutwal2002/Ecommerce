import React, { useEffect, useState } from "react";
import classes from "./Cart.module.css";
import Card from "./Card/Card";
import { getCartItems } from "../../API/EcommerceApi";
import Loader from "../../utils/Loader/Loader";

const DUMMY_CART = {
  _id: "64075a5446d11583a15a3e2a",
  bill: 6195,
  items: [
    {
      productId: "6405e7b3c8e87304f9777d24",
      name: "boAt Airdopes 163",
      quantity: 3,
      price: 1399,
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
      _id: "64076a65cfda24c5d6215b60",
    },
    {
      productId: "6405e737c8e87304f9777d1e",
      name: "boAt Airdopes 131",
      quantity: 2,
      price: 999,
      image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
      _id: "64076d99bc1b511023b0d015",
    },
  ],
  __v: 2,
};

const Cart = () => {
  const [cart, setCart] = useState({});
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    getCartItems().then((res) => {
      console.log(res);
      setCart(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {!isloading ?(
        <div className={classes.main}>
          <span className={classes.large}>
            Your <span className={classes.colouredText}> Cart</span>{" "}
          </span>
          <div className={classes.cards}>
            {cart.items.length !== 0 &&
              cart.items.map((e, index) => {
                return (
                  <Card
                    key={index}
                    image={e.image}
                    price={e.price}
                    quantity={e.quantity}
                    name={e.name}
                  />
                );
              })}
          </div>
          <div className={classes.large}>
            Total <span>{cart.bill && cart.bill}</span>
          </div>
          <button className={classes.button}>Place Order</button>
        </div>
      ):< Loader/>}
    </>
  );
};

export default Cart;
