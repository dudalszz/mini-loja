import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-logo">Loja</div>
      <div className="navbar-actions">
        <button
          className="theme-toggle"
          onClick={toggleTheme} // ✅ Isso deve funcionar
          aria-label={`Mudar para tema ${isDark ? "claro" : "escuro"}`}
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        <div className="cart-badge">
          🛒
          {cartItems.length > 0 && (
            <span className="cart-badge-count">{cartItems.length}</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
