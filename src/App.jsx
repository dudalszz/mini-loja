import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import {
  ThemeProvider as CustomThemeProvider,
  useTheme,
} from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import Navigation from "./Navigation";
import { theme, darkTheme } from "./theme";
import GlobalHome from "./01-css-global/Home";
import ModulesCart from "./02-css-modules/Cart";
import TailwindProductDetails from "./03-tailwind/ProductDetails";
import StyledCategory from "./04-styled-components/Category";

import GlobalStyles from "./04-styled-components/components/GlobalStyle";
// ou se estiver na pasta components:
// import GlobalStyles from "./04-styled-components/components/globalstyle";

function ThemedApp() {
  const { isDark } = useTheme();

  return (
    <StyledThemeProvider theme={isDark ? darkTheme : theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/global" replace />} />
          <Route path="/global" element={<GlobalHome />} />
          <Route path="/modules" element={<ModulesCart />} />
          <Route path="/tailwind" element={<TailwindProductDetails />} />
          <Route path="/styled" element={<StyledCategory />} />
        </Routes>
      </BrowserRouter>
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <CustomThemeProvider>
      <CartProvider>
        <ThemedApp />
      </CartProvider>
    </CustomThemeProvider>
  );
}

export default App;
