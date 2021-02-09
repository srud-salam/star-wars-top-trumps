import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Person from '../Cards/Person';
import Starship from '../Cards/Starship';
import { sortArrayByChild } from '../../helper';

function Game({ game }) {
  const lastGame = game[game.length - 1];

  if (!lastGame) {
    return null;
  } else {
    const newArray = [...lastGame.opponents];
    const winnerObj =
      lastGame.type === 'people'
        ? sortArrayByChild(newArray, 'mass')
        : sortArrayByChild(newArray, 'crew');

    return (
      <Grid>
        <Row center="xs">
          {lastGame.opponents.map((opponent, i) => (
            <Col xs={12} sm={4} key={i}>
              {lastGame.type === 'people' ? (
                <Person
                  index={i}
                  data={opponent}
                  isWinner={winnerObj.url === opponent.url}
                />
              ) : (
                <Starship
                  index={i}
                  data={opponent}
                  isWinner={winnerObj.url === opponent.url}
                />
              )}
            </Col>
          ))}
        </Row>
      </Grid>
    );
  }
}

export default Game;
