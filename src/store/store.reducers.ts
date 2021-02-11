import { v4 as uuidv4 } from "uuid";
import { Action, Entity, State } from "./store.types";
import { ADD_PLAYER, PLAY, REMOVE_PLAYER, SET_MAX } from "./store.constants";
import { deal, convertToSentenceCase, getWinner } from "./store.helpers";
import { useReducer } from "react";

export const initState: State = {
  hands: [],
  winner: { index: 0, value: 0 },
  players: 2,
  maxPlayers: 2,
  history: [],
};

const reducer = (state: State, action: Action<Entity>): State => {
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state,
        players: Math.min(state.players + 1, state.maxPlayers),
      };
    case REMOVE_PLAYER:
      return { ...state, players: Math.max(2, state.players - 1) };
    case SET_MAX:
      return { ...state, maxPlayers: action.payload };
    case PLAY: {
      const { deck, compareField } = action.payload;
      const hands = deal(deck.slice(), state.players);
      const winner = getWinner(hands, compareField);
      return {
        ...state,
        hands,
        winner: winner,
        history: [
          ...state.history,
          {
            id: uuidv4(),
            time: new Date().toLocaleTimeString(),
            winner: winner,
            compareField: convertToSentenceCase(compareField),
          },
        ],
      };
    }
    default:
      throw new Error();
  }
};

const usePlayerReducer = (): [State, React.Dispatch<Action<Entity>>] => {
  return useReducer(reducer, initState);
};

export default usePlayerReducer;
