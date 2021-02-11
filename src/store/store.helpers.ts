import { Entity } from "./store.types";

export const deal = (cards: Entity[], players: number): Entity[] => {
  return Array(players)
    .fill(0)
    .flatMap(() => {
      const ranIndex = Math.floor(Math.random() * (cards.length - 1));
      return cards.splice(ranIndex, 1);
    });
};

export const getWinner = <T>(
  hands: T[],
  compareField: string
): { index: number; value: number } => {
  let values: number[] = hands.map(
    (card: any) => parseFloat(card.height?.toString()) || 0
  );

  if (compareField === "hyperdriveRating") {
    values = hands.map(
      (card: any) => parseFloat(card.hyperdriveRating?.toString()) || 0
    );
  }
  const value = Math.max(...values);
  const index = values.findIndex((cardValue) => cardValue === value);
  return { index, value };
};

export const getWinnerCard = <T>(hands: T[], compareField: string): T => {
  let values: number[] = hands.map(
    (card: any) => parseFloat(card.height?.toString()) || 0
  );

  if (compareField === "hyperdriveRating") {
    values = hands.map(
      (card: any) => parseFloat(card.hyperdriveRating?.toString()) || 0
    );
  }
  const value = Math.max(...values);
  const index = values.findIndex((cardValue) => cardValue === value);
  return hands[index];
};

export const convertToSentenceCase = (camelCaseString: string): string => {
  if (camelCaseString === "" || camelCaseString == null) return "";
  const result = camelCaseString.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};
