import styled from "styled-components";
import { Container } from "../layout/layout.styles";

export const PlayerButton = styled(Container)<{ url: string }>`
  background-image: url(${(props) => props.url});
  width: 40%;
  font-size: 4rem;
  float: left;
  margin: 3px;
  color: #00796b;

  &.active,
  &:hover {
    color: #fff;
  }
`;
