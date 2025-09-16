import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { products } from "../data/products";

const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex flex-col">
      <Navbar />

      <div
        className="
        grid grid-cols-1 gap-6 p-6 
        max-w-7xl mx-auto flex-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-4 
        sm:p-6
      "
      >
        {isLoading
          ? Array(6)
              .fill(0)
              .map((_, index) => <ProductCard key={index} loading />)
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
