import { Entity } from "../../store/store.types";

export interface CardProps {
  card: Entity;
  winner: { index: number; value: number };
  compareField: string;
}
