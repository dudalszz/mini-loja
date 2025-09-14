import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { getCartItemsCount } = useCart();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>Loja</div>
      <div className={styles.navbarActions}>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={`Mudar para tema ${isDark ? "claro" : "escuro"}`}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
        <button className={styles.cartBadge} aria-label="Carrinho de compras">
          🛒
          <span className={styles.cartBadgeCount}>{getCartItemsCount()}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
