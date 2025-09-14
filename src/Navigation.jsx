// src/components/Navigation/Navigation.jsx
import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const NavContainer = styled.nav`
  background-color: ${(props) => props.theme.colors.bgSecondary};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding: ${(props) => props.theme.spacing.md};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.spacing.md};
  list-style: none;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavItem = styled.li`
  display: flex;
`;

const NavButton = styled.button`
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.md};
  border: 2px solid
    ${(props) => (props.$isActive ? props.theme.colors.accent : "transparent")};
  border-radius: ${(props) => props.theme.borderRadius.default};
  background-color: ${(props) =>
    props.$isActive ? props.theme.colors.accent : "transparent"};
  color: ${(props) =>
    props.$isActive ? "white" : props.theme.colors.textPrimary};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) =>
      props.$isActive ? props.theme.colors.accent : props.theme.colors.border};
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent};
    outline-offset: 2px;
  }
`;

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: "/global", label: "CSS Global" },
    { path: "/modules", label: "CSS Modules" },
    { path: "/tailwind", label: "Tailwind CSS" },
    { path: "/styled", label: "Styled Components" },
  ];

  return (
    <NavContainer>
      <NavList>
        {navItems.map((item) => (
          <NavItem key={item.path}>
            <NavButton
              onClick={() => navigate(item.path)}
              $isActive={location.pathname === item.path}
            >
              {item.label}
            </NavButton>
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
