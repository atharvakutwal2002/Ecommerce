import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Card from "./components/Landing Page Cards/Card";
import ProductCard from "./components/Product Card/ProductCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <Card/>
      <ProductCard/>
      <Footer/>
    </div>
  );
}

export default App;
