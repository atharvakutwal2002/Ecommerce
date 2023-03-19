import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../API/EcommerceApi";
import ProductCard from "../Product Card/ProductCard";
import classes from "./ProductListing.module.css";
import CardSkeleton from "../../utils/Loader/Card Loader/CardSkeleton";

const ProductListing = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(category);
    getProducts().then((res) => {
      console.log(res.data);
      let newArr = res.data.filter((el) => {
        return el.category === category;
      });
      console.log(newArr);
      setProducts(newArr);
      setLoading(false);
    });
  }, [category]);

  return (
    <div className={classes.main}>
      {(products && products.length>0 && !loading) &&
        products.map((p, index) => {
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
        {loading && <CardSkeleton/>}
    </div>
  );
};

export default ProductListing;
