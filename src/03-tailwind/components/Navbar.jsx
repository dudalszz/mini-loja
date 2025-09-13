import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { getCartItemsCount } = useCart();

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "var(--spacing-md) var(--spacing-lg)",
        backgroundColor: "var(--color-bg-secondary)",
        boxShadow: "var(--shadow-sm)",
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "var(--color-text-primary)",
        }}
      >
        Loja
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-md)",
        }}
      >
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "var(--spacing-sm)",
            borderRadius: "var(--border-radius)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-text-primary)",
            transition: "background-color 0.2s ease",
          }}
          onClick={toggleTheme}
          aria-label={`Mudar para tema ${isDark ? "claro" : "escuro"}`}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
        <button
          style={{
            position: "relative",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "var(--spacing-sm)",
            borderRadius: "var(--border-radius)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-text-primary)",
            transition: "background-color 0.2s ease",
          }}
          aria-label="Carrinho de compras"
        >
          🛒
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "var(--color-accent)",
              color: "white",
              borderRadius: "50%",
              width: "18px",
              height: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.75rem",
              fontWeight: "bold",
            }}
          >
            {getCartItemsCount()}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
