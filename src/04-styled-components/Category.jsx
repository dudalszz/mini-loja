import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { products } from "../data/products";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${(props) =>
    props.theme.colors.bgPrimary}; /* fundo preto igual ao card */
  padding-top: ${(props) => props.theme.spacing.xxl};
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.textPrimary};
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  gap: ${(props) => props.theme.spacing.lg};
  padding: ${(props) => props.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
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
    <Container>
      <Navbar />
      <ProductsGrid>
        {isLoading
          ? Array(6)
              .fill(0)
              .map((_, index) => <ProductCard.Skeleton key={index} />)
          : products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </ProductsGrid>
    </Container>
  );
};

export default Category;
