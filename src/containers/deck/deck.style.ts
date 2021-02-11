import styled from "styled-components";
import { Container } from "../../components/layout/layout.styles";

export const Board = styled(Container)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-auto-rows: 50%;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 1rem;
  overflow-y: auto;
`;

export const ControlsContainer = styled.div`
  font-size: 1.5rem;
  column-gap: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-auto-rows: 50%;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 1rem;
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 20px 20px 20px 20px;
    border: 2px solid lightblue;
    text-transform: capitalize;
    margin: 2px;
  }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
  }
`;
