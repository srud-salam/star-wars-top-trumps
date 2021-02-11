import React from "react";
import { useParams } from "react-router-dom";
import { RouterParams } from "../../containers/deck/deck.route.param";
import { convertToSentenceCase } from "../../store/store.helpers";
import { CardProps } from "./card.props";
import {
  CardContainer,
  CardHeader,
  CardBody,
  CardBodyRow,
  Label,
  Span,
  Winner,
} from "./card.styles";

export const FIELDS = ["__typename", "id", "name"];

const Card: React.FC<CardProps> = ({ card, winner, compareField }) => {
  const { player } = useParams<RouterParams>();

  const isWinner = () => {
    if (compareField === "hyperdriveRating" && card.__typename === "Starship") {
      if (card.hyperdriveRating === winner.value) return true;
    }

    if (compareField === "hieght" && card.__typename === "Person") {
      if (card.height === winner.value) return true;
    }

    return false;
  };
  console.log(card, winner, compareField);
  return (
    <CardContainer data-testid={`card-test-id-${card.id}`}>
      <CardBody data-testid={`card-body-id-${card.id}`}>
        <CardHeader player={player}>
          {isWinner() ? (
            <Winner>{card.name} is winner</Winner>
          ) : (
            <div>{card.name}</div>
          )}
        </CardHeader>
        {Object.entries(card)
          .filter(([key]) => !FIELDS.includes(key))
          .map(([key, val]) => (
            <CardBodyRow key={key}>
              <Label>{convertToSentenceCase(key)}</Label>
              <Span>{val}</Span>
            </CardBodyRow>
          ))}
      </CardBody>
    </CardContainer>
  );
};

export default Card;
