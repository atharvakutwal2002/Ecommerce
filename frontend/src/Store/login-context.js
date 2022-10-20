import { createContext, useState } from "react";

const LoginContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export function LoginContextProvider(props) {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  function loginHandler() {
    setIsLoggedIn(true);
  }

  function logOutHandler() {
    setIsLoggedIn(false);
  }

  const logContext = {
    isloggedIn: isloggedIn,
    login: loginHandler,
    logout: logOutHandler,
  };

  return (
    <LoginContext.Provider value={logContext}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginContext;
