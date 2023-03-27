import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/Add product/AddProduct";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import { RequireAuth } from "./utils/requireAuth";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import ProductDetail from "./components/Product Detail/ProductDetail";
import ProductListing from "./components/ProductingListing/ProductListing";

import Profile from "./components/profile/Profile";
import Cart from "./components/Cart/Cart";
import Loader from "./utils/Loader/Loader";
import Order from "./components/Orders/Order";
import UpperFooter from './components/UpperFooter/UpperFooter'

function App() {
  return (
    <Router>
      <Header />

      <div style={{ minHeight: "80vh" , maxWidth:'100vw' , overflow:"hidden" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Order />} />
          
          <Route
            path="/profile"
            element={
              <RequireAuth>
                {" "}
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/cart/:id"
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
          />
          <Route path="/postproduct" element={<AddProduct />} />
          <Route path="/products/:category" element={<ProductListing />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;
