import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Player from "../../components/player";
import Deck from "../../containers/deck";

const Home: React.FC = () => {
  const match = useRouteMatch();

  console.log(`${match.url}:player`);

  return (
    <>
      <Switch>
        <Route path={`${match.url}:player`}>
          <Deck />
        </Route>
        <Route path={match.url}>
          <Player />
        </Route>
      </Switch>
    </>
  );
};

export default Home;
