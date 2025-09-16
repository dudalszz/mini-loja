import React, { useState } from "react";
import Rating from "./Rating";
import AddButton from "./AddButton";

const ProductCard = ({ product, loading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleAddToCart = () => {
    console.log("Produto adicionado:", product.title);
  };

  const getTagClass = (tag) => {
    if (!tag) return "";
    const lower = tag.toLowerCase();
    if (lower === "promo") return "promo";
    if (lower === "novo") return "novo";
    return "";
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
      {/* Tag sempre visível */}
      {product.tag && (
        <span
          className={`product-card-tag ${getTagClass(product.tag)}`}
          data-tag={product.tag}
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
