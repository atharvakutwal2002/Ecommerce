import { createContext, useState } from "react";

const LoginContext = createContext({
  isLoggedIn: false,
  toggleLoginHandler: () => {},
});

export function LoginContextProvider(props) {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  function toggleLoginHandler() {
    setIsLoggedIn(prevLoginState=>{
      return !prevLoginState
    });
  }

  const logContext = {
    isloggedIn:isloggedIn,
    toggleLogin: toggleLoginHandler,
  };

  return (
    <LoginContext.Provider value={logContext}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginContext;
