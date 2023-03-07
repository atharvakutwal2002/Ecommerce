import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../API/EcommerceApi";
import ProductCard from "../Product Card/ProductCard";

const ProductListing = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

  let newArr;

  if (products.length !== 0) {
    newArr = products.filter(function (el) {
      
      return el.category===category;
    });
    
  }
  
  console.log(newArr)

  return <div>
    {(newArr && newArr.length!==0)&& newArr.map(e=>{
      <ProductCard/>
    })}
  </div>;
};

export default ProductListing;
