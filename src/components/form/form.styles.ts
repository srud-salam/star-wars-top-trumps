import styled from "styled-components/macro";
import { rgba } from "polished";

export const Container = styled.div`
  border-top: 1px solid ${rgba("#000", 0.1)};
  border-bottom: 1px solid ${rgba("#000", 0.1)};
  padding: 10px;
  margin-bottom: 20px;

  opacity: ${(props: any) => (props.isLoading ? 0.5 : 1)};
  pointer-events: ${(props: any) => (props.isLoading ? "none" : "initial")};
`;

export const FormItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

export const FormLabel = styled.label`
  font-size: 13px;
  opacity: 0.7;
  margin-right: 5px;
`;

export const Button = styled.button`
  background-color: ${(props) => rgba(props.theme.primary, 0.1)};
  color: ${(props) => props.theme.primary};
  padding: 10px 30px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  border: 0;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${(props) => rgba(props.theme.primary, 0.2)};
  }
`;
