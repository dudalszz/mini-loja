// components/ProductCard.jsx
import React, { useState } from "react";
import Rating from "./Rating";
import AddButton from "./AddButton";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";

const ProductCard = ({ product, loading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();
  const { isDark } = useTheme();

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-700 overflow-hidden flex flex-col h-full w-72 animate-pulse">
        <div className="w-full h-64 bg-gray-300 dark:bg-neutral-700"></div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="h-5 bg-gray-300 dark:bg-neutral-700 rounded mb-3"></div>
          <div className="h-6 bg-gray-300 dark:bg-neutral-700 rounded mb-3"></div>
          <div className="h-4 bg-gray-300 dark:bg-neutral-700 rounded mb-4"></div>
          <div className="h-10 bg-gray-300 dark:bg-neutral-700 rounded mt-auto w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg border border-gray-200 dark:border-neutral-700 overflow-hidden flex flex-col h-full w-72">
      <div className="relative flex-grow">
        {!imageError ? (
          <div className="w-full h-64 flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-800">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              style={{ display: imageLoaded ? "block" : "none" }}
            />
            {!imageLoaded && (
              <span className="text-sm text-gray-500 dark:text-neutral-400">
                Carregando...
              </span>
            )}
          </div>
        ) : (
          <div className="w-full h-64 flex items-center justify-center bg-gray-100 dark:bg-neutral-800">
            <span className="text-sm text-gray-500 dark:text-neutral-400">
              Imagem não disponível
            </span>
          </div>
        )}

        <span
          className={`absolute top-3 left-3 text-white text-sm px-3 py-1.5 rounded font-medium ${
            product.tag.toLowerCase() === "promo"
              ? "bg-red-600 dark:bg-red-700"
              : product.tag.toLowerCase() === "novo"
              ? "bg-green-600 dark:bg-green-700"
              : "bg-black dark:bg-neutral-00"
          }`}
        >
          {product.tag}
        </span>
      </div>

      <div className="p-5 flex flex-col">
        <h3 className="font-normal text-gray-900 dark:text-neutral-100 text-base mb-3 line-clamp-2 leading-tight">
          {product.title}
        </h3>
        <div className="text-xl font-bold text-gray-900 dark:text-neutral-100 mb-3">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
        <Rating value={product.rating} isDark={isDark} />
        <div className="mt-4 flex justify-start">
          <AddButton
            onClick={handleAddToCart}
            group={product.group}
            className="py-2 px-5 text-sm font-semibold"
          >
            Adicionar
          </AddButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
