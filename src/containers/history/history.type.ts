import { Entity } from "../../store/store.types";

export type HistoryType = {
  winner: Entity;
  winnerDate: Date;
  playerHands: Entity[];
};
