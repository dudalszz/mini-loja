// components/Navbar.jsx
import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { cartItems } = useCart();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>ALBUMS</div>

      <div className={styles.navbarActions}>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={`Mudar para tema ${isDark ? "claro" : "escuro"}`}
        >
          {isDark ? "☀️" : "🌙"}
        </button>

        <button className={styles.cartButton} aria-label="Carrinho de compras">
          🛒
          {cartItems.length > 0 && (
            <span className={styles.cartBadgeCount}>{cartItems.length}</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
