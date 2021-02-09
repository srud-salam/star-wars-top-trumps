import styled from "styled-components/macro";
import { rgba } from "polished";

export const Player = styled.div`
  font-size: 20px;
  text-align: center;
  opacity: 0.6;
  margin-bottom: 5px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 1px 5px ${rgba("#000", 0.1)};
  border-radius: 5px;
  overflow: hidden;
  padding-bottom: 10px;
  margin-bottom: 1rem;
`;

export const Name = styled.div`
  background-color: ${(props: any) => (props.isStarship ? "#4b4b96" : "#111")};
  color: #fff;
  box-shadow: 0 3px 5px ${rgba("#000", 0.1)};
  padding: 10px 15px;
`;

export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: #f0f0f0;
  color: ${rgba("#000", 0.2)};
  font-size: 20px;
  margin-bottom: 15px;
`;

export const Features = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 15px;
`;

export const Feature = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;

  &:not(:last-of-type) {
    border-right: 1px solid ${rgba("#000", 0.1)};
  }
`;

export const FeatureTitle = styled.div`
  font-size: 14px;
  opacity: 0.7;
`;

export const FeatureValue = styled.div`
  font-weight: 500;
`;

export const Properties = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

export const Property = styled.div`
  display: flex;
  padding: 8px 0;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${rgba("#000", 0.1)};
  }
`;

export const PropertyTitle = styled.div`
  font-size: 14px;

  opacity: 0.7;
`;

export const PropertyValue = styled.div`
  flex: 1;
  font-weight: 500;
  text-align: right;
`;

export const Winner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -30px;
  top: 10px;
  width: 100px;
  background-color: red;
  padding: 5px 10px;
  color: #fff;
  text-align: center;
  font-size: 12px;
  pointer-events: none;
  transform: rotate(45deg);
`;
