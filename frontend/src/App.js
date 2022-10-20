import { useContext, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import AdressInput from "./components/Cart/AdressInput/AdressInput";
import LoginForm from "./components/Header/loginForm/LoginForm";

import Products from "./components/Products/Products";

import { CartContextProvider } from "./Store/new-cart-context";
import { LoginContextProvider } from "./Store/login-context";
import LoginContext from "./Store/login-context";
import SignUpForm from "./components/Header/signupForm/SignUpForm";

function App() {
  const logCtx = useContext(LoginContext);

  const [cartIsShown, setCartIsShown] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [formIsSubmit, setFormIsSubmit] = useState(false);
  const [addressInputIsShown, setaddressInputIsShown] = useState(false);

  const loginSignUpFormHanlder = () => {
    setFormIsSubmit(false);
    setShowLoginForm(false);
    setShowSignUpForm(false);
  };
  const showSignUpFormHandler = () => {
    setShowSignUpForm(true);
  };

  const showLoginFormHandler = () => {
    setShowSignUpForm(false);
    setShowLoginForm(true);
  };
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const showAddressInputHandler = () => {
    setaddressInputIsShown(true);
  };
  const hideAddressInputHandler = () => {
    setaddressInputIsShown(false);
  };
  const logoutHandler = () => {
    logCtx.logout();
  };
  return (
    <LoginContextProvider>
      <CartContextProvider>
        {addressInputIsShown && (
          <AdressInput onClose={hideAddressInputHandler} />
        )}
        {cartIsShown && (
          <Cart
            onShowAddressInput={showAddressInputHandler}
            onClose={hideCartHandler}
          />
        )}

        {showSignUpForm && (
          <SignUpForm
            onClickLogin={showLoginFormHandler}
            onSubmit={loginSignUpFormHanlder}
          />
        )}
        {showLoginForm && <LoginForm onSubmit={loginSignUpFormHanlder} />}

        <Header
          onLogout={logoutHandler}
          onShowSignUpForm={showSignUpFormHandler}
          onShowCart={showCartHandler}
        />

        <Products />
      </CartContextProvider>
    </LoginContextProvider>
  );
}

export default App;
