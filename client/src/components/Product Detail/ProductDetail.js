import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import StarRatings from "react-star-ratings";
import { getSingleProduct } from "../../API/EcommerceApi";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../../API/EcommerceApi";
import Loader from "../../utils/Loader/Loader";

const PRODUCT = {
  name: "airdopes 141",
  price: 999,
  category: "wirelessearphones",
  details:
    "boAt Airdopes 131 |  Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers and IWP Technology, 650mah C type Charging Case",
  rating: 5,
  original_price: 1500,
  imageLink:
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/back_600x.png?v=1668599490",
};

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [productLoading, setProductLoading] = useState(true);

  useEffect(() => {
    getSingleProduct(id).then((res) => {
      setProduct(res.data);
      setProductLoading(false);
    });
  }, []);

  const handleAddTocart = async () => {
    setProductLoading(true);
    if (localStorage.getItem("userId")) {
      const obj = { productId: product._id, quantity: 1 };
      const response = await addToCart(obj);
      console.log(response);
      if (response.status === 200) {
        navigate(`/cart/${localStorage.getItem("userId")}`);
        setProductLoading(false);
      }
    } else {
      navigate("/login");
    }

   
    // if (response.status===200) {
    //   navigate(`/cart/${localStorage.getItem('userId')}`)
    //   setProductLoading(false);
    // }else{
    //   navigate('/login')
    // }
  };

  return (
    <div>
      {!productLoading ? (
        <div className={classes.main}>
          <div className={classes.imageDiv}>
            <img
              className={classes.actualImage}
              src={product.imageLink ? product.imageLink : ""}
              alt="productImage"
            />
          </div>
          <div className={classes.content}>
            <span className={classes.heading}>
              {product.name ? product.name : ""}
            </span>
            <span className={classes.details}>{product.details}</span>
            <span>
              <StarRatings
                rating={product.rating}
                starRatedColor="#F7A928"
                starDimension="20px"
                numberOfStars={5}
                name="rating"
              />
            </span>
            <div className={classes.pricing}>
              <div className={classes.price}>₹ {product.price} </div>
              <span className={classes.light}>Inclusive of all taxes</span>
              <button onClick={handleAddTocart} className={classes.button}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductDetail;
