import React from "react";
import styles from "./Button.module.css";

const AddButton = ({
  variant = "solid",
  disabled = false,
  loading = false,
  onClick,
  children,
}) => {
  const variantClass =
    styles[`btn${variant.charAt(0).toUpperCase() + variant.slice(1)}`];

  return (
    <button
      className={`${styles.btn} ${variantClass}`}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
};

export default AddButton;
