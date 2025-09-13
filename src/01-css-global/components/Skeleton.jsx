import React from "react";

const Skeleton = ({ type = "text", width, height }) => {
  const style = {};
  if (width) style.width = width;
  if (height) style.height = height;

  return <div className={`skeleton skeleton-${type}`} style={style}></div>;
};

export default Skeleton;
