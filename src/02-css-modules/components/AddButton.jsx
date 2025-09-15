// components/AddButton.jsx
import React from "react";
import styles from "./AddButton.module.css"; // ← Nome correto

const AddButton = ({
  disabled = false,
  loading = false,
  onClick,
  children,
  group,
}) => {
  const getButtonClass = () => {
    switch (group) {
      case "Red Velvet":
        return styles.redVelvet;
      case "TWICE":
        return styles.twice;
      case "(G)I-DLE":
        return styles.gidle;
      case "aespa":
        return styles.aespa;
      default:
        return styles.default;
    }
  };

  return (
    <button
      className={getButtonClass()}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
};

export default AddButton;
