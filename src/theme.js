// theme.js
export const theme = {
  colors: {
    bgPrimary: "#ffffff",
    bgSecondary: "#ffffff",
    textPrimary: "#212529",
    textSecondary: "#6c757d",
    accent: "#007bff",
    border: "#dee2e6",
    success: "#28a745",
    warning: "#ffc107",
    danger: "#dc3545",
    rating: "#fd7e14",
    // Cores dos grupos K-pop
    redVelvet: "#E21B1B",
    twice: "#1B4DE2",
    gidle: "#8A2BE2",
    aespa: "#FF1493",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
  },
  borderRadius: {
    default: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  },
  shadows: {
    sm: "0 1px 3px rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
  },
  sizes: {
    cardWidth: "288px",
    imageHeight: "256px",
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    bgPrimary: "#000000",
    bgSecondary: "#000000",
    textPrimary: "#ffffff",
    textSecondary: "#a0a0a0",
    border: "#333333",
  },
};
