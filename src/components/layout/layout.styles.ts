import { createGlobalStyle } from "styled-components/macro";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.43;
    background-color: #FBFBFB;

  }
`;

export const theme = {
  primary: "#00796B",
  dangerColor: "#fc0d1b",
  dismissColor: "#666",
  media: {
    xs: "768px",
    sm: "992px",
    md: "1200px",
    lg: "2440px",
  },
  flexboxgrid: {
    gutterWidth: 2,
    outerMargin: 1,
    container: {
      sm: 44,
      lg: 71,
    },
  },
};
