import React from "react";

const Rating = ({ value }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="rating">
      <div className="rating-stars">
        {"★".repeat(fullStars)}
        {hasHalfStar ? "⭐" : ""}
        {"☆".repeat(emptyStars)}
      </div>
      <span className="rating-value">({value.toFixed(1)})</span>
    </div>
  );
};

export default Rating;
