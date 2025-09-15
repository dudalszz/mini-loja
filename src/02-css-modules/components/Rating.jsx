import React from "react";
import styles from "./Rating.module.css";

const Rating = ({ value }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={styles.rating}>
      <div className={styles.ratingStars}>
        {[...Array(fullStars)].map((_, i) => (
          <span
            key={`full-${i}`}
            className={`${styles.star} ${styles.starFilled}`}
          >
            ★
          </span>
        ))}

        {hasHalfStar && (
          <span className={`${styles.star} ${styles.starHalf}`}>★</span>
        )}

        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className={styles.star}>
            ★
          </span>
        ))}
      </div>
      <span className={styles.ratingValue}>({value.toFixed(1)})</span>
    </div>
  );
};

export default Rating;
