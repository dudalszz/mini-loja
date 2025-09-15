import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { products } from "../data/products";
import styles from "./Cart.module.css";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.productsGrid}>
        {isLoading
          ? Array(6)
              .fill(0)
              .map((_, index) => <ProductCard key={index} loading />)
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default Cart;
