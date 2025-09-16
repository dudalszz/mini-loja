import React from "react";

const Rating = ({ value, isDark }) => {
  const fullStars = Math.floor(value);

  return (
    <div className="flex items-center mb-4">
      {" "}
      <div className="flex text-yellow-400 text-base mr-2">
        {" "}
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={
              i < fullStars
                ? "text-yellow-400"
                : isDark
                ? "text-gray-600"
                : "text-gray-300"
            }
          >
            ★
          </span>
        ))}
      </div>
      <span
        className="text-sm"
        style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
      >
        {" "}
        ({value.toFixed(1)})
      </span>
    </div>
  );
};

export default Rating;
