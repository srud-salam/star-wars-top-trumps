import React, { useEffect, useState } from "react";
import { HistoryType } from "../history/history.type";
import { ControlProps } from "./deck.control.props";

const Control: React.FC<ControlProps> = ({
  state: { players, maxPlayers, history },
  dispatch,
  play,
}) => {
  const [deck, setDeck] = useState<HistoryType>();

  useEffect(() => {
    if (history!.length === 0) return;

    setDeck(history![history!.length - 1]);
  }, [history]);

  return <div></div>;
};

export default Control;
