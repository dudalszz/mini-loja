// components/ProductCard.jsx
import React from "react";
import Rating from "./Rating";
import AddButton from "./AddButton";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product, loading = false }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (loading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col h-full animate-pulse">
        <div className="w-full h-48 bg-gray-300 dark:bg-gray-600"></div>
        <div className="p-3 flex flex-col">
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
          <div className="h-5 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-3"></div>
          <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        {product.tag && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            {product.tag}
          </span>
        )}
      </div>

      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-normal text-gray-900 dark:text-gray-100 text-sm mb-1">
          {product.title}
        </h3>

        <div className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>

        <Rating value={product.rating} />

        <div className="mt-auto">
          <AddButton
            onClick={handleAddToCart}
            group={product.group}
            className="w-full py-2"
          >
            Adicionar
          </AddButton>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
