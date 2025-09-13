import React, { useState } from "react";
import styled from "styled-components";
import Rating from "./Rating";
import AddButton from "./AddButton";
import { useCart } from "../../context/CartContext";

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.bgSecondary};
  border-radius: ${(props) => props.theme.borderRadius.md};
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.border};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${(props) => props.theme.shadows.lg};
  }
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  background-color: #e9ecef;
`;

const Content = styled.div`
  padding: ${(props) => props.theme.spacing.md};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-weight: 500;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.8rem;
  color: ${(props) => props.theme.colors.textPrimary};
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.textPrimary};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const Tag = styled.span`
  position: absolute;
  top: ${(props) => props.theme.spacing.sm};
  left: ${(props) => props.theme.spacing.sm};
  background-color: ${(props) =>
    props.$isPromo ? props.theme.colors.danger : props.theme.colors.accent};
  color: white;
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.borderRadius.default};
  font-size: 0.75rem;
  font-weight: bold;
  z-index: 1;
`;

const SkeletonImage = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.border} 25%,
    #e9ecef 50%,
    ${(props) => props.theme.colors.border} 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: ${(props) => props.theme.borderRadius.default};

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const SkeletonText = styled.div`
  height: 1rem;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.border} 25%,
    #e9ecef 50%,
    ${(props) => props.theme.colors.border} 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: ${(props) => props.theme.borderRadius.default};

  @keyframes loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

const ProductCard = ({ product, loading = false }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  if (loading) {
    return (
      <Card>
        <SkeletonImage />
        <Content>
          <SkeletonText />
          <SkeletonText />
          <SkeletonText style={{ width: "40%" }} />
          <Footer>
            <SkeletonText style={{ width: "60%" }} />
            <div
              style={{
                height: "2.25rem",
                width: "100%",
                background:
                  "linear-gradient(90deg, var(--color-border) 25%, #e9ecef 50%, var(--color-border) 75%)",
                backgroundSize: "200% 100%",
                animation: "loading 1.5s infinite",
                borderRadius: "var(--border-radius)",
              }}
            />
          </Footer>
        </Content>
      </Card>
    );
  }

  return (
    <Card>
      {product.tag && (
        <Tag $isPromo={product.tag === "Promo"}>{product.tag}</Tag>
      )}
      <Image
        src={product.image}
        alt={product.title}
        onLoad={() => setImageLoaded(true)}
      />
      <Content>
        <Title>{product.title}</Title>
        <Price>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Price>
        <Rating value={product.rating} />
        <Footer>
          <AddButton onClick={handleAddToCart} variant="solid">
            Adicionar
          </AddButton>
        </Footer>
      </Content>
    </Card>
  );
};

export default ProductCard;
