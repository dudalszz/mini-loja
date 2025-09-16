import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();

  const toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-theme");
    html.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">ALBUMS</div>
      <div className="navbar-actions">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Alternar tema"
        >
          {document.documentElement.getAttribute("data-theme") === "dark"
            ? "☀️"
            : "🌙"}
        </button>

        <button className="cart-button" aria-label="Carrinho de compras">
          🛒
          {cartItems.length > 0 && (
            <span className="cart-badge-count">{cartItems.length}</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
