import React from "react";
import { ThemeProvider } from "styled-components";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";
import GlobalStyle from "../globalStyles";

const theme = {
  colors: {
    primary: "var(--primary)",
  },
};

const Theme = ({ children } : { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Theme;