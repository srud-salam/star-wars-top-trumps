import styled from "styled-components/macro";
import { rgba } from "polished";
import { Link } from "react-router-dom";
import { Grid } from "react-styled-flexboxgrid";

export const Container = styled.div`
  padding: 10px;
  margin: 0 0 30px;
  background-color: #fff;
  box-shadow: 0 2px 5px ${rgba("#000", 0.1)};
`;

export const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: #333;
`;

export const Menu = styled.div`
  display: flex;
`;

export const LinkButton = styled(Link)`
  background-color: ${(props) => rgba(props.theme.primary, 0.03)};
  color: ${(props) => props.theme.primary};
  padding: 10px 30px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  margin-left: 10px;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${(props) => rgba(props.theme.primary, 0.2)};
  }
`;
