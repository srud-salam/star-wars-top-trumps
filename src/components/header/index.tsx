import React from "react";
import { Container, StyledGrid, Logo, Menu, LinkButton } from "./header.styles";

const Header = () => {
  return (
    <Container>
      <StyledGrid>
        <Logo to="/">Star Wars Top Trumps</Logo>
        <Menu>
          <LinkButton to="/">Home</LinkButton>
          <LinkButton to="/history/">History</LinkButton>
        </Menu>
      </StyledGrid>
    </Container>
  );
};

export default Header;
