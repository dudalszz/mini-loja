import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const getCartItemsCount = () => cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, getCartItemsCount }}>
      {children}
    </CartContext.Provider>
  );
};
