import React, { useState, useEffect } from "react";
import classes from "./Carousel.module.css";
import ProductCard from "../Product Card/ProductCard";
import { getProducts } from "../../API/EcommerceApi";
import Carousel from "react-elastic-carousel";
import CardSkeleton from "../../utils/Loader/Card Loader/CardSkeleton";

const CarouselForLandingPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoding] = useState(true);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
      setLoding(false);
    });
  }, []);
  console.log(products);
  return (
    <>
      <span className={classes.heading}>Our Products >> </span>
      <div className={classes.regular}>
        {products.length !== 0 && !isLoading && (
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
        {isLoading && <CardSkeleton />}
      </div>
      <div className={classes.mob}>
        {products.length !== 0 && !isLoading && (
          <Carousel
            itemsToShow={1}
            pagination={false}
            showArrows={false}
            enableAutoPlay={true}
          >
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
        {isLoading && <CardSkeleton />}
      </div>
    </>
  );
};

export default CarouselForLandingPage;
