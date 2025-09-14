import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import CartItem from "./components/CartItem";
import { products } from "../data/products";
import styles from "./Cart.module.css";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.productsGrid}>
        {" "}
        {/* ← Use styles.nomeDaClasse */}
        {isLoading
          ? Array(6)
              .fill(0)
              .map((_, index) => <CartItem key={index} loading />)
          : products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Cart;
