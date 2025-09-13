import React from "react";

const Skeleton = ({ type = "text", width, height, className = "" }) => {
  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return (
    <div
      className={`skeleton ${
        type === "image" ? "aspect-square" : ""
      } ${className}`}
      style={style}
    />
  );
};

export default Skeleton;
