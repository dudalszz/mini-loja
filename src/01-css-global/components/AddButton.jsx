import React from "react";

const AddButton = ({
  variant = "solid",
  disabled = false,
  loading = false,
  onClick,
  children,
  group,
}) => {
  const getButtonClass = () => {
    switch (group) {
      case "Red Velvet":
        return "btn-red-velvet";
      case "TWICE":
        return "btn-twice";
      case "(G)I-DLE":
        return "btn-gidle";
      case "aespa":
        return "btn-aespa";
      default:
        return "btn-default";
    }
  };

  return (
    <button
      className={`btn ${getButtonClass()}`}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
};

export default AddButton;
