import React, { useContext, useRef } from "react";
import "./LoginForm.css";
import LoginContext from "../../../Store/login-context";

const LoginForm = (props) => {
  const nameInputRef=useRef();
  const emailInputRef= useRef();
  const passwordInputRef= useRef();
  const logCtx = useContext(LoginContext);
  
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    const loginDetails={
      name: nameInputRef.current.value,
      email:emailInputRef.current.value,
      password: passwordInputRef.current.value

    }

    console.log(loginDetails)
    
    logCtx.login()
    console.log(logCtx)
    props.onSubmit();
  };

  return (
    <div>
      <div className="loginForm">
        <form className="actualForm" onSubmit={loginSubmitHandler} action="">
          <input
           ref={nameInputRef}
            className="loginInputs"
            type="text"
            placeholder="Enter your name"
          />
          <input
           ref={emailInputRef}
            className="loginInputs"
            type="email"
            name=""
            id=""
            placeholder="Enter your Email"
          />
          <input
          ref={passwordInputRef}
            className="loginInputs"
            type="password"
            name=""
            id=""
            placeholder="Enter Password"
          />
          <button  className="loginButton" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
