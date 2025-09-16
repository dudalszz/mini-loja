import React from "react";

const AddButton = ({
  disabled = false,
  loading = false,
  onClick,
  children,
  group,
  className = "",
}) => {
  const getButtonClass = () => {
    switch (group) {
      case "Red Velvet":
        return "bg-red-600 hover:bg-red-700";
      case "TWICE":
        return "bg-blue-600 hover:bg-blue-700";
      case "(G)I-DLE":
        return "bg-purple-600 hover:bg-purple-700";
      case "aespa":
        return "bg-pink-600 hover:bg-pink-700";
      default:
        return "bg-green-600 hover:bg-green-700";
    }
  };

  return (
    <button
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        rounded font-medium transition-all duration-200 
        transform hover:scale-105 active:scale-95
        text-white py-1.5 px-4 text-xs
        ${getButtonClass()} ${className}
      `}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
};

export default AddButton;
