import React, { useState, useEffect } from "react";
import classes from './Carousel.module.css'

const Carousel = ({ itemsToShow, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % children.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [children.length]);

  return (
    <div className={classes.carousel}>
      <div
        className={classes.carousel_content}
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
