export const theme = {
  colors: {
    bgPrimary: "#ffffff",
    bgSecondary: "#f8f9fa",
    textPrimary: "#212529",
    textSecondary: "#6c757d",
    accent: "#007bff",
    border: "#dee2e6",
    success: "#28a745",
    warning: "#ffc107",
    danger: "#dc3545",
    rating: "#fd7e14",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  borderRadius: {
    default: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
  },
  shadows: {
    sm: "0 1px 3px rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    bgPrimary: "#121212",
    bgSecondary: "#1e1e1e",
    textPrimary: "#f8f9fa",
    textSecondary: "#adb5bd",
    border: "#495057",
  },
};
