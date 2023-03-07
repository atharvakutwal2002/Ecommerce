import React, { useState, useEffect } from "react";
import classes from "./Carousel.module.css";
import ProductCard from "../Product Card/ProductCard";
import { getProducts } from "../../API/EcommerceApi";
import Carousel, { consts } from "react-elastic-carousel";
import { Link } from "react-router-dom";

const CarouselForLandingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);
  console.log(products);
  return (
    <>
      <div className={classes.regular}>
        {products.length !== 0 && (
          <Carousel itemsToShow={4} pagination={false} enableAutoPlay={true}>
            {products.map((p, index) => {
              return (
                <ProductCard
                  key={index}
                  id={p._id}
                  img={p.imageLink}
                  name={p.name}
                  price={p.price}
                />
              );
            })}
          </Carousel>
        )}
      </div>
      <div className={classes.mob}>
        {products.length !== 0 && (
          <Carousel itemsToShow={1} pagination={false} showArrows={false} enableAutoPlay={true}>
            {products.map((p, index) => {
              return (
                <ProductCard
                  key={index}
                  id={p._id}
                  img={p.imageLink}
                  name={p.name}
                  price={p.price}
                />
              );
            })}
          </Carousel>
        )}
      </div>
    </>
  );
};

export default CarouselForLandingPage;
