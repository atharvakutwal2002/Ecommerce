import React, { useState } from "react";
import classes from "./Login.module.css";
import LoginBackgrouund from "./Login.png";
import { Signup, loginApi } from "../../API/EcommerceApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Loader from "../../utils/Loader/Loader";

const notifySuccess = () => {
  toast.success("Welcome ! you have logged in successfully .", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
const notifyFailure = () => {
  toast.error("Oops ! Something went wrong . Please try again ! .", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const Login = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(true);

  //signup states
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [base64Image, setBase64Image] = useState("");

  //login states
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //loading state
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setBase64Image(reader.result);
    };
  };

  const handleSignup = async (e) => {
    setLoading(true);

    e.preventDefault();
    const signupObject = {
      name,
      username,
      email,
      password,
    };

    const response = await Signup(signupObject);
    if (response.status === 201) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.newUser._id);

      notifySuccess();
      navigate("/profile");
      setLoading(false);
    } else {
      setLoading(false);
      notifyFailure();
    }
  };

  const handleLogin = async (e) => {
    setLoading(true);

    e.preventDefault();
    const response = await loginApi({
      username: loginUsername,

      password: loginPassword,
    });

    if (response.status === 201) {
      notifySuccess();
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.user._id);
      setLoading(false);
      navigate("/profile");
    } else {
      setLoading(false);
      notifyFailure();
    }
  };

  const login = (
    <div className={classes.form}>
      <div className={classes.columnFlex}>
        <span>username</span>
        <input
          className={classes.input}
          placeholder="Enter your username"
          type="text"
          required
          onChange={(e) => {
            setLoginUsername(e.target.value);
          }}
        />
      </div>
      <div className={classes.columnFlex}>
        <span>Password</span>
        <input
          className={classes.input}
          placeholder="Enter your password"
          type="password"
          onChange={(e) => {
            setLoginPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleLogin} className={classes.button}>
          Login
        </button>
      </div>
      <span>
        Do not have accout yet ?{" "}
        <span
          style={{
            color: "whitesmoke ",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={(e) => {
            setShowLogin(false);
          }}
        >
          Signup now{" "}
        </span>
      </span>
    </div>
  );

  const signup = (
    <form onSubmit={handleSignup} className={classes.form}>
      <div className={classes.columnFlex}>
        <span>Name</span>
        <input
          className={classes.input}
          placeholder="Enter your name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className={classes.columnFlex}>
        <span>username</span>
        <input
          className={classes.input}
          placeholder="Enter your username"
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className={classes.columnFlex}>
        <span>Email</span>
        <input
          className={classes.input}
          placeholder="Enter your email"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className={classes.columnFlex}>
        <span>Password</span>
        <input
          className={classes.input}
          placeholder="Enter your password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      {/* <div className={classes.file}>
        <span>Profile </span>
        <input
          className={classes.fileUpload}
          placeholder="profile"
          type="file"
          name=""
          id=""
          onChange={handleImageChange}
        />
      </div> */}
      <div>
        <button type="submit" className={classes.button}>
          Signup
        </button>
      </div>
      <span>
        Already have accout{" "}
        <span
          style={{
            color: "whitesmoke ",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={(e) => {
            setShowLogin(true);
          }}
        >
          Login now{" "}
        </span>
      </span>
    </form>
  );

  return (
    <>
      {!loading ? (
        <div className={classes.main}>
          <ToastContainer />
          <div className={classes.outer}>
            <img
              className={classes.cryptoImg}
              src={LoginBackgrouund}
              alt=""
              srcSet=""
            />
            {showLogin ? login : signup}
          </div>
        </div>
      ) : <Loader/>}
    </>
  );
};

export default Login;
