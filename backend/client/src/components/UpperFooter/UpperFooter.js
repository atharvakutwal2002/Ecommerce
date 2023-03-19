import React from "react";
import classes from "./Footer.module.css";
import logo from "./logo.png";

const UpperFooter = () => {
  return (
    <div className={classes.outer}>
      <div className={classes.text}>
        <span className={classes.actualText}>
          India's fastest growing audio & wearables brand. The most incredible
          range of wireless earphones, earbuds, headphones, smart watches, and
          home audio. From workouts to adventures, boAt will get you sailing!
        </span>
      </div>

      <div className={classes.main}>
        <div className={classes.logoDiv}>
          <img className={classes.logo} src={logo} alt="" />
        </div>
        <div className={classes.linksDiv}>
          <span className={classes.heading}>Help</span>
          <a
            className={classes.links}
            href="https://www.boat-lifestyle.com/pages/return-policy"
          >
            Return Policy
          </a>
          <a
            className={classes.links}
            href="https://www.boat-lifestyle.com/pages/why-buy-direct"
          >
            Why buy direct
          </a>
          <a
            className={classes.links}
            href="https://support.boat-lifestyle.com/"
          >
            Warranty and Support Policy
          </a>
          <a
            className={classes.links}
            href="https://www.boat-lifestyle.com/pages/service-center-list"
          >
            Service Centers
          </a>
          <a
            className={classes.links}
            href="https://www.boat-lifestyle.com/pages/frequently-asked-questions"
          >
            FAQs
          </a>
        </div>
        <div className={classes.linksDiv}>
          <span className={classes.heading}>Company</span>
          <a
            className={classes.links}
            href="https://www.boat-lifestyle.com/pages/who-are-we"
          >
            About boAt
          </a>
          <a
            className={classes.links}
            href="https://www.boat-lifestyle.com/blogs/news"
          >
            News
          </a>
          <a
            className={classes.links}
            href="https://www.boat-lifestyle.com/blogs/blog"
          >
            Read our blogs
          </a>
          <a
            className={classes.links}
            href="https://www.boat-lifestyle.com/pages/social-responsibility"
          >
            Social Responsibility
          </a>
          <a
            className={classes.links}
            href="https://www.boat-lifestyle.com/pages/warranty"
          >
            Warranty Policy
          </a>
        </div>
        <div className={classes.linksDiv}>
          <a
            className={classes.links}
            href="https://www.boat-lifestyle.com/pages/who-are-we"
          >
            Security
          </a>
          <a
            className={classes.links}
            href="https://www.boat-lifestyle.com/blogs/news"
          >
            Terms of Service
          </a>
          <a
            className={classes.links}
            href="https://www.boat-lifestyle.com/pages/privacy-policy"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpperFooter;
