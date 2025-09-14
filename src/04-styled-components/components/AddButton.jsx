import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.default};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.xs};
  min-height: 40px;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent};
    outline-offset: 2px;
  }

  ${(props) =>
    props.variant === "solid" &&
    `
    background-color: ${props.theme.colors.accent};
    color: white;
    border-color: ${props.theme.colors.accent};

    &:hover:not(:disabled) {
      background-color: #0b5ed7;
      border-color: #0a58ca;
      transform: translateY(-1px);
    }
  `}

  ${(props) =>
    props.variant === "outline" &&
    `
    background-color: transparent;
    color: ${props.theme.colors.accent};
    border-color: ${props.theme.colors.accent};

    &:hover:not(:disabled) {
      background-color: ${props.theme.colors.accent};
      color: white;
      transform: translateY(-1px);
    }
  `}

  ${(props) =>
    props.variant === "ghost" &&
    `
    background-color: transparent;
    color: ${props.theme.colors.accent};
    border-color: transparent;

    &:hover:not(:disabled) {
      background-color: rgba(13, 110, 253, 0.1);
      transform: translateY(-1px);
    }
  `}
`;

const AddButton = ({
  variant = "solid",
  disabled = false,
  loading = false,
  onClick,
  children,
}) => {
  return (
    <Button
      variant={variant}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
    >
      {loading ? "Carregando..." : children}
    </Button>
  );
};

export default AddButton;
