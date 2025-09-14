import React from "react";
import styles from "./Skeleton.module.css";

const Skeleton = ({ type = "text", width, height }) => {
  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div
      className={`${styles.skeleton} ${
        styles[`skeleton${type.charAt(0).toUpperCase() + type.slice(1)}`]
      }`}
      style={style}
    ></div>
  );
};

export default Skeleton;
