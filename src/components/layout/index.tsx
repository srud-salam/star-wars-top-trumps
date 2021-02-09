import React from "react";
import { ThemeProvider } from "styled-components";

import Header from "../header";
import { LayoutProps } from "./layout.props";
import { theme, GlobalStyle } from "./layout.styles";

const Layout = (props: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Header />
        {props.children}
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Layout;
