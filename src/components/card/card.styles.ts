import styled from "styled-components";
import {
  PEOPLE_IMGS,
  PLAYER_TYPE,
  STARSHIPS_IMGS,
} from "../player/player.constant";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  width: 300px;
  float: left;
  margin: 5px;
`;

export const CardHeader = styled.div<{ player: string }>`
  padding: 2rem;
  background-image: url(${(props) => getRandomImage(props.player)});
  height: 20px !important;
  width: 300px !important;
  padding-bottom: 120px !important;
  color: #fff;
  background-color: black;
`;

const getRandomImage = (player: string) => {
  if (player === "people") {
    const img = PEOPLE_IMGS[Math.floor(Math.random() * PEOPLE_IMGS.length)];
    return img;
  }

  if (player === "starships") {
    const img =
      STARSHIPS_IMGS[Math.floor(Math.random() * STARSHIPS_IMGS.length)];
    return img;
  }
};

export const CardBody = styled.div`
  padding: 1rem;
  font-size: 1rem;
`;

export const CardBodyRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.75rem;
  font-size: 1rem;
`;

export const Winner = styled.div`
  display: winner;
  background-color: red;
`;

export const Label = styled.label``;
export const Span = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-left: 0.5rem;
  display: inline-block;
`;
