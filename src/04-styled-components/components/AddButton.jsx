// components/AddButton.jsx
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: ${(props) => props.theme.borderRadius.default};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: auto;
  font-size: 0.75rem;
  text-transform: none;
  letter-spacing: normal;

  /* Efeitos hover/active */
  &:hover:not(:disabled) {
    transform: scale(1.05);
    filter: brightness(1.1);
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Cores baseadas no grupo */
  ${(props) => {
    switch (props.group) {
      case "Red Velvet":
        return `
          background-color: ${props.theme.colors.redVelvet};
          color: white;
          &:hover:not(:disabled) {
            background-color: #c41616;
          }
        `;
      case "TWICE":
        return `
          background-color: ${props.theme.colors.twice};
          color: white;
          &:hover:not(:disabled) {
            background-color: #1a45c7;
          }
        `;
      case "(G)I-DLE":
        return `
          background-color: ${props.theme.colors.gidle};
          color: white;
          &:hover:not(:disabled) {
            background-color: #7a25d9;
          }
        `;
      case "aespa":
        return `
          background-color: ${props.theme.colors.aespa};
          color: white;
          &:hover:not(:disabled) {
            background-color: #e0127a;
          }
        `;
      default:
        return `
          background-color: ${props.theme.colors.success};
          color: white;
          &:hover:not(:disabled) {
            background-color: #218838;
          }
        `;
    }
  }}
`;

const AddButton = ({
  disabled = false,
  loading = false,
  onClick,
  children,
  group,
}) => {
  return (
    <Button
      group={group}
      disabled={disabled || loading}
      onClick={onClick}
      aria-busy={loading}
    >
      {loading ? "Carregando..." : children}
    </Button>
  );
};

export default AddButton;
