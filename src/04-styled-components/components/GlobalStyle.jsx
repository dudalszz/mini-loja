import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.bgPrimary};
    color: ${(props) => props.theme.colors.textPrimary};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
    line-height: 1.6;
  }

  #root {
    min-height: 100vh;
  }

 
  button:focus-visible,
  a:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent};
    outline-offset: 2px;
  }

  /* Utilitários */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export default GlobalStyles;
