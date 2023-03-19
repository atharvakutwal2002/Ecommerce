import React from "react";
import "./../../commonStyles/Commonstyles.css";
import Card from "../Landing Page Cards/Card";
import classes from "./CategoryList.module.css";
import banner1 from "./banners/wireless earphones.png";
import banner2 from "./banners/neckband.png";
import banner3 from "./banners/smartwatch.png";
import banner4 from "./banners/wireless headphones.png";
import banner5 from "./banners/wireless speakers.png";
import banner6 from "./banners/trimmer.png";
import banner7 from "./banners/accessories.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel, { consts } from "react-elastic-carousel";

const ARR = [
  {
    heading: "Wireless Earphones",
    subHeading: "new collection",
    category: "wirelessearphones",
    banner: banner1,
  },
  {
    heading: "Neckbands",
    subHeading: "",
    category: "neckbands",
    banner: banner2,
  },
  {
    heading: "Smart Watch",
    subHeading: "",
    category: "smartwatch",
    banner: banner3,
  },
  {
    heading: "Wireless headphones",
    subHeading: "",
    category: "wirelessheadphones",
    banner: banner4,
  },
  {
    heading: "Speakers",
    subHeading: "Party Speakers",
    category: "speakers",
    banner: banner5,
  },
  {
    heading: "Trimmers",
    subHeading: "timmers",
    category: "trimmer",
    banner: banner6,
  },
  {
    heading: "accessories",
    subHeading: "",
    category: "accessories",
    banner: banner7,
  },
];

const CategoryList = () => {
  return (
    <div className={classes.main}>
      <span className={classes.title}>Shop by categories</span>
      <div className={classes.corouselDesktop}>
        <Carousel
          axis="horizontal"
          infiniteLoop={true}
          autoPlaySpeed={1000}
          enableAutoPlay={true}
          itemsToShow={5}
          centerMode={true}
          style={{ width: "100vw" }}
          pagination={false}
          showArrows={false}
          isInfinite={true}
        >
          {ARR.map((e, index) => {
            return (
              <Card
                key={index}
                heading={e.heading}
                subHeading={e.subHeading}
                category={e.category}
                banner={e.banner}
              />
            );
          })}
        </Carousel>
      </div>
      <div className={classes.corouselMobile}>
        <Carousel
          axis="horizontal"
          infiniteLoop={true}
          autoPlaySpeed={1000}
          enableAutoPlay={true}
          itemsToShow={1}
          centerMode={true}
          style={{ width: "100vw" }}
          pagination={false}
          showArrows={false}
          isInfinite={true}
        >
          {ARR.map((e, index) => {
            return (
              <Card
                key={index}
                heading={e.heading}
                subHeading={e.subHeading}
                category={e.category}
                banner={e.banner}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryList;
