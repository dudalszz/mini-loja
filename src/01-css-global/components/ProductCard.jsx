import React, { useState } from "react";
import Rating from "./Rating";
import AddButton from "./AddButton";

const ProductCard = ({ product, loading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = () => {
    console.log("Produto adicionado:", product.title);
    // Aqui você pode adicionar uma notificação ou feedback visual
  };

  if (loading) {
    return (
      <div className="product-card">
        <div className="skeleton skeleton-image"></div>
        <div className="product-card-content">
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div
            className="skeleton skeleton-text"
            style={{ width: "40%" }}
          ></div>
          <div className="product-card-footer">
            <div
              className="skeleton skeleton-text"
              style={{ width: "60%" }}
            ></div>
            <div className="skeleton skeleton-button"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-card">
      {product.tag && (
        <span
          className={`product-card-tag ${
            product.tag.toLowerCase() === "promo" ? "promo" : ""
          }`}
        >
          {product.tag}
        </span>
      )}
      <img
        src={product.image}
        alt={product.title}
        className="product-card-image"
        onLoad={() => setImageLoaded(true)}
      />
      <div className="product-card-content">
        <h3 className="product-card-title">{product.title}</h3>
        <div className="product-card-price">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
        <Rating value={product.rating} />
        <div className="product-card-footer">
          <AddButton onClick={handleAddToCart} group={product.group}>
            Adicionar
          </AddButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
