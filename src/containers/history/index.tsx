import React from "react";
import { IHistoryContext } from "./history.context";

export const HistoryContext = React.createContext<IHistoryContext>({
  history: [],
  setHistory: () => void 0,
});
