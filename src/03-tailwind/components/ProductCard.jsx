import React, { useState } from "react";
import Rating from "./Rating";
import AddButton from "./AddButton";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product, loading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (loading) {
    return (
      <div className="product-card">
        <div className="skeleton-loading w-full aspect-square"></div>
        <div className="product-card-content">
          <div className="skeleton-loading h-4"></div>
          <div className="skeleton-loading h-4"></div>
          <div className="skeleton-loading h-4 w-2/5"></div>
          <div className="product-card-footer">
            <div className="skeleton-loading h-4 w-3/5"></div>
            <div className="skeleton-loading h-9 w-full"></div>
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
            product.tag === "Promo" ? "product-card-tag-promo" : ""
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
          <AddButton onClick={handleAddToCart} variant="solid">
            Adicionar
          </AddButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
