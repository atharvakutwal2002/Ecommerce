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

function App() {

  const logCtx=useContext(LoginContext);

  const [cartIsShown, setCartIsShown] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [formIsSubmit, setFormIsSubmit]= useState(false);
  const [addressInputIsShown, setaddressInputIsShown] = useState(false);

  const loginFormHanlder=()=>{
    setFormIsSubmit(false);
    setShowLoginForm(false)
  }

  const showLoginFormHandler = () => {
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
        
        {showLoginForm && <LoginForm onSubmit={loginFormHanlder} />}
       

        <Header
          onShowLoginForm={showLoginFormHandler}
          onShowCart={showCartHandler}
        />

        <Products />
      </CartContextProvider>
    </LoginContextProvider>
  );
}

export default App;
