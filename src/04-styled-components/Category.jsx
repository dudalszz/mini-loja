import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { products } from "../data/products";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => props.theme.spacingLg};
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CategoryContainer = styled.div`
  padding-top: ${(props) => props.theme.spacingXl};
`;

const Category = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CategoryContainer>
      <Navbar />
      <ProductsGrid>
        {isLoading
          ? Array(6)
              .fill(0)
              .map((_, index) => <ProductCard key={index} loading />)
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </ProductsGrid>
    </CategoryContainer>
  );
};

export default Category;
