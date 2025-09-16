import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.bgSecondary};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  padding: ${(props) => props.theme.spacing.lg};
  margin-top: auto;
`;

const FooterContent = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.875rem;

  p {
    margin: 0.25rem 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>© 2025 KpopStore</p>
        <p>Todos os direitos reservados.</p>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
