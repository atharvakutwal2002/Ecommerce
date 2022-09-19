import React from "react";
import './Products.css'

import Product from "../Product/Product";

function Products() {
  const productArray = [
    { productHeading: "Mobile", imageLink: "link", price: 45000 },
    { productHeading: "Camera", imageLink: "link", price: 5600 },
    { productHeading: "Bulb", imageLink: "link", price: 200 },
    { productHeading: "Cover", imageLink: "link", price: 350 },
    { productHeading: "Stand", imageLink: "link", price: 100 },
    { productHeading: "Charger", imageLink: "link", price: 150 },
    { productHeading: "Charger", imageLink: "link", price: 150 },
    { productHeading: "Charger", imageLink: "link", price: 150 },
    { productHeading: "Charger", imageLink: "link", price: 150 },
  ];
  return (
    <div className="productSection">
      {productArray.map((e, key) => (
        <Product
          heading={e.productHeading}
          link={e.imageLink}
          price={e.price} key={key}
        />
      ))}
    </div>
  );
}

export default Products;
