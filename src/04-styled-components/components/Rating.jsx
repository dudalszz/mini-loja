// components/Rating.jsx
import React from "react";

const Rating = ({ value }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center mb-3">
      <div className="flex mr-2 text-yellow-400 text-lg">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="mr-1">
            ★
          </span>
        ))}
        {hasHalfStar && <span className="mr-1">★</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span
            key={`empty-${i}`}
            className="mr-1 text-gray-300 dark:text-gray-500"
          >
            ★
          </span>
        ))}
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
        ({value.toFixed(1)})
      </span>
    </div>
  );
};

export default Rating;
