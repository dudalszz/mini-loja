import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import styles from "./CartItem.module.css";
import Rating from "./Rating";
import AddButton from "./AddButton";

const CartItem = ({ product, loading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (loading) {
    return (
      <div className={styles.productCard}>
        <div className={styles.skeletonImage}></div>
        <div className={styles.productCardContent}>
          <div className={styles.skeletonText}></div>
          <div className={styles.skeletonText}></div>
          <div
            className={`${styles.skeletonText} ${styles.skeletonTextShort}`}
          ></div>
          <div className={styles.productCardFooter}>
            <div
              className={`${styles.skeletonText} ${styles.skeletonTextShort}`}
            ></div>
            <div className={styles.skeletonButton}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.productCard}>
      {product.tag && (
        <span
          className={`${styles.productCardTag} ${
            product.tag === "Promo" ? styles.productCardTagPromo : ""
          }`}
        >
          {product.tag}
        </span>
      )}
      <img
        src={product.image}
        alt={product.title}
        className={styles.productCardImage}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />
      <div className={styles.productCardContent}>
        <h3 className={styles.productCardTitle}>{product.title}</h3>
        <div className={styles.productCardPrice}>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
        <Rating value={product.rating} />
        <div className={styles.productCardFooter}>
          <AddButton onClick={handleAddToCart} variant="solid">
            Adicionar
          </AddButton>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
