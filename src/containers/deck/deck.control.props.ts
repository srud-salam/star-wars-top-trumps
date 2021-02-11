import { Action, Entity, State } from "../../store/store.types";

export interface ControlProps {
  play: () => void;
  state: Partial<State>;
  dispatch: React.Dispatch<Action<Entity>>;
}
