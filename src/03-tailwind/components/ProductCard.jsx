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
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col h-full animate-pulse w-72">
        {" "}
        {/* ↑ w-72 (288px) */}
        <div className="w-full h-64 bg-gray-300 dark:bg-gray-600"></div>{" "}
        {/* ↑ h-64 (256px) */}
        <div className="p-5 flex flex-col flex-grow">
          {" "}
          {/* ↑ p-5 */}
          <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded mb-3"></div>{" "}
          {/* ↑ h-5 */}
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-3"></div>{" "}
          {/* ↑ h-6 */}
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
          <div className="h-10 bg-gray-300 dark:bg-gray-600 rounded mt-auto w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col h-full w-72">
      {" "}
      {/* ↑ w-72 (288px) */}
      <div className="relative flex-grow">
        {!imageError ? (
          <div
            className="w-full h-64 flex items-center justify-center overflow-hidden" // ↑ h-64 (256px)
            style={{ backgroundColor: isDark ? "#000000" : "#ffffff" }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-scale-down"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          <div
            className="w-full h-64 flex items-center justify-center" // ↑ h-64 (256px)
            style={{ backgroundColor: isDark ? "#000000" : "#f3f4f6" }}
          >
            <span
              className="text-sm"
              style={{ color: isDark ? "#9ca3af" : "#6b7280" }}
            >
              Imagem não disponível
            </span>
          </div>
        )}

        {product.tag && (
          <span
            className="absolute top-3 left-3 text-white text-sm px-3 py-1.5 rounded font-medium" // ↑ tamanho maior
            style={{ backgroundColor: isDark ? "#374151" : "#000000" }}
          >
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col">
        {" "}
        {/* ↑ p-5 */}
        <h3 className="font-normal text-gray-900 dark:text-gray-100 text-base mb-3 line-clamp-2 leading-tight">
          {" "}
          {/* ↑ text-base */}
          {product.title}
        </h3>
        <div className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
          {" "}
          {/* ↑ text-xl */}
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
        <Rating value={product.rating} isDark={isDark} />
        <div className="mt-4 flex justify-start">
          {" "}
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
