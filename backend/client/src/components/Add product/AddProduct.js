import React from "react";
import classes from "./AddProduct.module.css";
import { useState } from "react";
import { postProduct } from "../../API/EcommerceApi";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productRatings, setProductRatings] = useState(0);
  const [productCategory, setProductCategory] = useState("");
  const [base64Image, setBase64Image] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBase64Image(reader.result);
    };
  };

  const postProduct = async () => {
    
    const response = await postProduct({
      name: productName,
      price: productPrice,
      category: productCategory,
      rating: productRatings,
      details: productDetails,
      imageLink: base64Image,
    });
    console.log(response);
  };

  return (
    <div>
      <form  >
        <div className={classes.file}>
          <span>Product Image </span>
          <input
            className={classes.fileUpload}
            placeholder="profile"
            type="file"
            name=""
            id=""
            onChange={handleImageChange}
          />
        </div>
        <div>
          <span>Name</span>
          <input
            type="text"
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </div>
        <div>
          <span>Price</span>
          <input
            type="number"
            onChange={(e) => {
              setProductPrice(e.target.value);
            }}
          />
        </div>
        <div>
          <span>Category</span>
          <input
            type="text"
            onChange={(e) => {
              setProductCategory(e.target.value);
            }}
          />
        </div>
        <div>
          <span>Details</span>
          <textarea
            onChange={(e) => {
              setProductDetails(e.target.value);
            }}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <span>Ratings</span>
          <input
            onChange={(e) => {
              setProductRatings(e.target.value);
            }}
            type="number"
          />
        </div>
        <button onClick={postProduct} type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
