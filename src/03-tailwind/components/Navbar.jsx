import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { getCartItemsCount } = useCart();

  return (
    <nav className="bg-white dark:bg-black shadow-md p-4 sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl text-gray-900 dark:text-gray-100">
          ALBUMS{" "}
        </div>
        <div className="flex items-center gap-4">
          <button
            className="bg-transparent border-none cursor-pointer p-2 rounded flex items-center justify-center text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleTheme}
            aria-label={`Mudar para tema ${isDark ? "claro" : "escuro"}`}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
          <button
            className="relative bg-transparent border-none cursor-pointer p-2 rounded flex items-center justify-center text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Carrinho de compras"
          >
            🛒
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              {getCartItemsCount()}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
