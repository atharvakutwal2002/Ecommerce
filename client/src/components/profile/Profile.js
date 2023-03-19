import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Profile.module.css";
import icon from "./profileIcon.png";
import { getUserProfile } from "../../API/EcommerceApi";
import Loader from "../../utils/Loader/Loader";
import ProductCard from "../Product Card/ProductCard";

const Profile = () => {
  const [profile, setProfile] = useState({});
  
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserProfile().then((res) => {
      setProfile(res.data.user);
      setIsLoading(false);
    });
   
  }, []);

  const navigate = useNavigate();
  return (
    <>
      {!isloading ? (
        <div className={classes.main}>
          <div className={classes.profileImageDiv}>
            <img className={classes.profileImage} src={icon} alt="" />
          </div>
          <div className={classes.name}>
            Name : <span className={classes.colouredText}>{profile.name}</span>{" "}
          </div>
          <div className={classes.username}>
            Username :{" "}
            <span className={classes.colouredText}> {profile.username}</span>
          </div>
          <div className={classes.email}>email : {profile.email}</div>
          <div className={classes.email}>joined : {profile.register_date}</div>
          
          <button
            onClick={(e) => {
              localStorage.removeItem("token");
              localStorage.removeItem("userId");
              navigate("/login");
            }}
            className={classes.button}
          >
            Logout
          </button>
          <button
            onClick={(e) => {
              
              navigate("/orders");
            }}
            className={classes.orderButton}
          >
           Orders
          </button>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Profile;
