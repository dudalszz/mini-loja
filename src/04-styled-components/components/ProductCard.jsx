// components/ProductCard.jsx
import React, { useState } from "react";
import styled from "styled-components";
import Rating from "./Rating";
import AddButton from "./AddButton";
import { useCart } from "../../context/CartContext";
import { useTheme } from "../../context/ThemeContext";

const Card = styled.div`
  background-color: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${(props) => props.theme.sizes.cardWidth};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.lg};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => props.theme.sizes.imageHeight};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.bgSecondary};
  border-top-left-radius: var(--border-radius-lg);
  border-top-right-radius: var(--border-radius-lg);
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: scale-down;
  display: block;
  object-fit: cover;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.bgSecondary};
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.875rem;
`;

const Tag = styled.span`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: ${(props) => props.theme.borderRadius.default};
  font-weight: 500;
  z-index: 10;

  background-color: ${(props) =>
    props.tag?.toLowerCase() === "promo"
      ? props.theme.colors.danger
      : props.tag?.toLowerCase() === "novo"
      ? props.theme.colors.success
      : "#000"};
`;

const Content = styled.div`
  padding: ${(props) => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-weight: 400;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 1rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.8rem;
`;

const Price = styled.div`
  font-weight: 700;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 1.25rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const ButtonContainer = styled.div`
  margin-top: auto;
  padding-top: ${(props) => props.theme.spacing.md};
  display: flex;
  justify-content: flex-start;
`;

const ProductCard = ({ product, loading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();
  const { isDark } = useTheme();

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (loading) {
    return <SkeletonCard />;
  }

  return (
    <Card>
      <ImageContainer>
        {!imageError ? (
          <>
            <ProductImage
              src={product.image}
              alt={product.title}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              style={{ display: imageLoaded ? "block" : "none" }}
            />
            {!imageLoaded && <Placeholder>Carregando...</Placeholder>}
          </>
        ) : (
          <Placeholder>Imagem não disponível</Placeholder>
        )}

        {product.tag && <Tag tag={product.tag}>{product.tag}</Tag>}
      </ImageContainer>

      <Content>
        <Title>{product.title}</Title>

        <Price>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>

        <Rating value={product.rating} />

        <ButtonContainer>
          <AddButton onClick={handleAddToCart} group={product.group}>
            Adicionar
          </AddButton>
        </ButtonContainer>
      </Content>
    </Card>
  );
};

const SkeletonCard = styled(Card)`
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: ${(props) => props.theme.sizes.imageHeight};
  background-color: ${(props) => props.theme.colors.border};
`;

const SkeletonText = styled.div`
  height: 1rem;
  background-color: ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.default};
  margin-bottom: ${(props) => props.theme.spacing.md};

  &:nth-child(1) {
    width: 80%;
  }
  &:nth-child(2) {
    width: 60%;
    height: 1.25rem;
    margin-bottom: ${(props) => props.theme.spacing.lg};
  }
  &:nth-child(3) {
    width: 40%;
  }
`;

const SkeletonButton = styled.div`
  height: 2rem;
  width: 70%;
  background-color: ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius.default};
  margin-top: ${(props) => props.theme.spacing.xl};
`;

ProductCard.Skeleton = () => (
  <SkeletonCard>
    <SkeletonImage />
    <Content>
      <SkeletonText />
      <SkeletonText />
      <SkeletonText />
      <SkeletonButton />
    </Content>
  </SkeletonCard>
);

export default ProductCard;
