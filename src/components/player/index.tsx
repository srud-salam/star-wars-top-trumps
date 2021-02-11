import React from "react";
import { Link } from "react-router-dom";
import { Header, Content } from "../../components/layout/layout.styles";
import { PLAYER_TYPE } from "./player.constant";
import { PlayerButton } from "./player.styles";

const Player: React.FC = () => {
  return (
    <>
      <Header>
        <h3>Choose Player</h3>
      </Header>
      <Content>
        {Object.entries(PLAYER_TYPE).map(([key, { path, label, img }]) => (
          <PlayerButton url={img} as={Link} key={key} to={path}>
            {label}
          </PlayerButton>
        ))}
      </Content>
    </>
  );
};

export default Player;
