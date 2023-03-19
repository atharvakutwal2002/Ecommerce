import React from "react";
import Carousel from "../Carousel for Landing Page/CarouselForLandingPage";
import CategoryList from "../CategoryList/CategoryList";
import Hero from "../Hero/Hero";
import Card from "../Landing Page Cards/Card";
import ProductCard from "../Product Card/ProductCard";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <CategoryList/>
      
      <Carousel/>
    </div>
  );
};

export default LandingPage;
