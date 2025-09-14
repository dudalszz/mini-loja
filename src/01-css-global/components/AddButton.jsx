import React from "react";

const AddButton = ({
  variant = "solid",
  disabled = false,
  loading = false,
  onClick,
  children,
}) => {
  const variantClass = `btn-${variant}`;

  return (
    <button
      className={`btn ${variantClass}`}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
};

export default AddButton;
