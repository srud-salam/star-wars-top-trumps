import styled from "styled-components/macro";
import { rgba } from "polished";

export const Container = styled.div`
  border-top: 1px solid lightblue;
  border-bottom: 1px solid lightblue;
  padding: 10px;
  margin-bottom: 20px;

  opacity: ${(props: any) => (props.isLoading ? 0.5 : 1)};
  pointer-events: ${(props: any) => (props.isLoading ? "none" : "initial")};
`;

export const Text = styled.p`
  text-align: center;
`;
