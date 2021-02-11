import React, { useCallback, useContext, useEffect, useState } from "react";

import { HistoryContext } from "../history";
import { useParams } from "react-router-dom";
import { RouterParams } from "./deck.route.param";
import {
  ADD_PLAYER,
  PLAY,
  REMOVE_PLAYER,
  SET_MAX,
} from "../../store/store.constants";
import usePlayerReducer from "../../store/store.reducers";
import { DocumentNode, useQuery } from "@apollo/react-hooks";
import {
  Header,
  Content,
  Container,
} from "../../components/layout/layout.styles";
import {
  PeopleDocument,
  StarshipsDocument,
  PlayerDocument,
} from "../../graphql/graphql.schema";

import { Button, CircularProgress } from "@material-ui/core";
import { Board, ControlsContainer, Wrapper } from "./deck.style";
import { Entity } from "../../store/store.types";
import Card from "../../components/card";

const query = (player: string): DocumentNode => {
  switch (player) {
    case "starships":
      return StarshipsDocument;
    case "people":
      return PeopleDocument;
    default:
      return PlayerDocument;
  }
};

const Deck: React.FC = () => {
  const { player } = useParams<RouterParams>();
  const { setHistory } = useContext(HistoryContext);
  const { data, loading, error } = useQuery(query(player));

  const [deck, setDeck] = useState<Entity[]>([]);
  const [compareField, setCompareField] = useState<string>("");

  const [{ hands, winner, ...state }, dispatch] = usePlayerReducer();
  const play = useCallback(
    () => dispatch({ type: PLAY, payload: { deck, compareField } }),
    [deck]
  );

  const playAgain = () => {
    if (!loading && !error) {
      if (player === "starships") {
        setCompareField("hyperdriveRating");
      }

      if (player === "people") {
        setCompareField("height");
      }

      if (
        data &&
        data.results &&
        data.results.player &&
        data.results.player.length >= 2
      ) {
        setDeck(data.results.player);
        dispatch({ type: SET_MAX, payload: deck.length });
        play();
      } else {
        console.log("Failed to find enough player to play.");
      }
    }
  };

  useEffect(() => {
    playAgain();
  }, [deck, compareField, state.players]);

  useEffect(() => {
    playAgain();
  }, [player, loading, error, data, state.players]);

  useEffect(() => {
    if (state.history.length > 0)
      setHistory((history) => [
        ...history,
        state.history[state.history.length - 1],
      ]);
  }, [state.history]);

  return (
    <>
      <Header>
        <h3>{player} Deck</h3>
      </Header>
      <Wrapper>
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <div>Something went wrong ... {error}</div>
        ) : (
          <div>
            <Content>
              <Button onClick={() => dispatch({ type: ADD_PLAYER })}>
                Add Player
              </Button>
              <Button onClick={() => dispatch({ type: REMOVE_PLAYER })}>
                Remove Player
              </Button>
              <Button onClick={() => play()}> Play Again</Button>
            </Content>
            {hands.map((card) => (
              <Card
                card={card}
                winner={winner}
                compareField={compareField}
                key={card.id}
              ></Card>
            ))}
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default Deck;
