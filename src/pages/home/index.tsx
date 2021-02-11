import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Player from "../../components/player";
import Deck from "../../containers/deck";
import History from "../../pages/history";

const Home: React.FC = () => {
  const match = useRouteMatch();
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
