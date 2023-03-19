import React from "react";
import classes from "./CardSkeleton.module.css";

import { Skeleton } from "primereact/skeleton";
import { InfinitySpin } from "react-loader-spinner";

const CardSkeleton = () => {
  return (
    <div className={classes.main}>
      <InfinitySpin width="200" color="red" />
    </div>
  );
};

export default CardSkeleton;
