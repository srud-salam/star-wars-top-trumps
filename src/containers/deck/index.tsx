import React, { useContext, useState } from "react";

import { HistoryContext } from "../history";
import { useParams } from "react-router-dom";
import { RouterParams } from "./deck.route.param";
import { DocumentNode, useQuery } from "@apollo/react-hooks";
import { Header, MainContent } from "../../components/layout/layout.styles";
import {
  PeopleDocument,
  StarshipsDocument,
  PlayerDocument,
} from "../../graphql/graphql.schema";

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

  const [deck, setDeck] = useState(null);
  const [compareField, setCompareField] = useState();
  const [errors, setErrors] = useState({ apollo: null, game: null });

  const { data, loading, error } = useQuery(query(player));

  console.log(loading, data, error);

  return (
    <>
      <Header>
        <h3>{player}1</h3>
      </Header>
    </>
  );
};

export default Deck;
