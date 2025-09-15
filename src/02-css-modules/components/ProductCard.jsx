// components/ProductCard.jsx
import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import styles from "./ProductCard.module.css"; // ← Nome correto
import Rating from "./Rating";
import AddButton from "./AddButton";

const ProductCard = ({ product, loading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (loading) {
    return (
      <div className={styles.skeletonCard}>
        <div className={styles.skeletonImage}></div>
        <div className={styles.content}>
          <div className={styles.skeletonText}></div>
          <div className={styles.skeletonText}></div>
          <div className={styles.skeletonText}></div>
          <div className={styles.skeletonButton}></div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {!imageError ? (
          <>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              style={{ display: imageLoaded ? "block" : "none" }}
            />
            {!imageLoaded && (
              <div className={styles.placeholder}>Carregando...</div>
            )}
          </>
        ) : (
          <div className={styles.placeholder}>Imagem não disponível</div>
        )}

        {product.tag && <span className={styles.tag}>{product.tag}</span>}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{product.title}</h3>

        <div className={styles.price}>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>

        <Rating value={product.rating} />

        <div className={styles.buttonContainer}>
          <AddButton onClick={handleAddToCart} group={product.group}>
            Adicionar
          </AddButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
