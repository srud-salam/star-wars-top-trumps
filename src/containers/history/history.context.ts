import { HistoryType } from "./history.type";

export interface IHistoryContext {
  history: HistoryType[];
  setHistory: React.Dispatch<React.SetStateAction<HistoryType[]>>;
}
