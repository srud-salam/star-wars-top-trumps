import styled, { createGlobalStyle } from "styled-components/macro";
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
    rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  height: 100%;
  width: 100%;
  transition: all 500ms;
  overflow: hidden;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Header = styled(Container)`
  grid-area: header;
`;

export const MainContent = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
