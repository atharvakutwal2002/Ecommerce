import React, { useContext, useRef } from "react";
import "./SignUpForm.css";
import LoginContext from "../../../Store/login-context";

const SignUpForm = (props) => {
  const signUpNameInputRef = useRef();
  const signUpEmailInputRef = useRef();
  const signUpPasswordInputRef = useRef();
  const logCtx = useContext(LoginContext);

  const signUpSubmitHandler = (event) => {
    const name = signUpNameInputRef.current.value;
    const email = signUpEmailInputRef.current.value;
    const password = signUpPasswordInputRef.current.value;
    const signUpDetails = { name, email, password };
    console.log(signUpDetails);
    event.preventDefault();
    logCtx.login();
    console.log(logCtx);
    props.onSubmit();
  };

  return (
    <div>
      <div className="loginForm">
        <form className="actualForm" onSubmit={signUpSubmitHandler} action="">
          <input
            ref={signUpNameInputRef}
            className="loginInputs"
            type="text"
            placeholder="Enter your name"
          />
          <input
            ref={signUpEmailInputRef}
            className="loginInputs"
            type="email"
            name=""
            id=""
            placeholder="Enter your Email"
          />
          <input
            ref={signUpPasswordInputRef}
            className="loginInputs"
            type="password"
            name=""
            id=""
            placeholder="Enter Password"
          />
          <button
            onClick={props.onSubmit}
            className="loginButton"
            type="submit"
          >
            SignUp
          </button>
          <button onClick={props.onClickLogin} className="loginButton">
            Continue to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
