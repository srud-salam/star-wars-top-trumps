import { Person, Starship } from "../graphql/graphql.schema";
import { HistoryType } from "../containers/history/history.type";
import { ADD_PLAYER, PLAY, REMOVE_PLAYER, SET_MAX } from "./store.constants";

export type Entity = Starship | Person;

export type State = {
  hands: Entity[];
  winner: Entity;
  players: number;
  maxPlayers: number;
  history: HistoryType[];
};

export type Action<T> =
  | { type: typeof ADD_PLAYER }
  | { type: typeof REMOVE_PLAYER }
  | { type: typeof SET_MAX; payload: number }
  | { type: typeof PLAY; payload: { deck: T[]; compareField: string } };
