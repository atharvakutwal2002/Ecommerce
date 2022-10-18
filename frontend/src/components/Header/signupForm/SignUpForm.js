import React, { useContext } from "react";
import "./SignUpForm.css";
import LoginContext from "../../../Store/login-context";

const SignUpForm = (props) => {
  const logCtx = useContext(LoginContext);

  const signUpSubmitHandler = (event) => {
    event.preventDefault();
    logCtx.toggleLogin();
    console.log(logCtx);
  };

  return (
    <div>
      <div className="loginForm">
        <form className="actualForm" onSubmit={signUpSubmitHandler} action="">
          <input
            className="loginInputs"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="loginInputs"
            type="email"
            name=""
            id=""
            placeholder="Enter your Email"
          />
          <input
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
