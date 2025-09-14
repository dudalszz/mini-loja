import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.lg};
  background-color: ${(props) =>
    props.theme.colors.bgPrimary}; /* fundo preto */
  box-shadow: ${(props) => props.theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.textPrimary};
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
`;

const ThemeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.borderRadius.default};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textPrimary};
  transition: all 0.2s ease;
  font-size: 1.2rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.border};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent};
    outline-offset: 2px;
  }
`;

const CartButton = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.borderRadius.default};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textPrimary};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.border};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent};
    outline-offset: 2px;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${(props) => props.theme.colors.accent};
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
`;

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const { getCartItemsCount } = useCart();

  return (
    <Nav>
      <Logo>Albums</Logo>
      <Actions>
        <ThemeButton
          onClick={toggleTheme}
          aria-label={`Mudar para tema ${isDark ? "claro" : "escuro"}`}
        >
          {isDark ? "☀️" : "🌙"}
        </ThemeButton>
        <CartButton aria-label="Carrinho de compras">
          🛒
          {getCartItemsCount() > 0 && <Badge>{getCartItemsCount()}</Badge>}
        </CartButton>
      </Actions>
    </Nav>
  );
};

export default Navbar;
