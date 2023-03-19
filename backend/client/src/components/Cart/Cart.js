import React, { useEffect, useState } from "react";
import classes from "./Cart.module.css";
import Card from "./Card/Card";
import { getCartItems, postOrder } from "../../API/EcommerceApi";
import Loader from "../../utils/Loader/Loader";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const [cart, setCart] = useState({});
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    getCartItems().then((res) => {
      setCart(res.data !== null && res.data.cart !== null ? res.data.cart : {});

      setIsLoading(false);
    });
  }, []);

  const placeOrder = async () => {
    setIsLoading(true);
    const obj = { bill: cart.bill, items: cart.items };
    const res = await postOrder(obj);
    console.log(res);
    if (res.status === 200) {
      navigate("/orders");
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isloading ? (
        <div className={classes.main}>
          <span className={classes.large}>
            Your <span className={classes.colouredText}> Cart</span>{" "}
          </span>
          <div className={classes.cards}>
            {cart &&
              cart.items &&
              cart.items.length > 0 &&
              cart.items.map((e, index) => {
                return (
                  <Card
                    key={index}
                    image={e.image}
                    price={e.price}
                    quantity={e.quantity}
                    name={e.name}
                    productId={e.productId}
                  />
                );
              })}
          </div>

          {cart && cart.items && cart.items.length > 0 ? (
            <div className={classes.content}>
              <div className={classes.large}>
                Total <span>{cart.bill && cart.bill}</span>
              </div>
              <button onClick={placeOrder} className={classes.button}>
                Place Order
              </button>
            </div>
          ) : (
            <div className={classes.content}>

            <span className={classes.text}>Nothing in your cart </span>
            <button onClick={e=>{navigate('/')}} className={classes.button}>Shop Now</button>
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
      {/* {!cart ||
        (cart && cart.items && cart.items.length === 0 && (
          <span>Nothing in your cart </span>
        ))} */}
    </>
  );
};

export default Cart;
