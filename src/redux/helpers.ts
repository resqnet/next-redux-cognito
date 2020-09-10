import produce from "immer";
import { Action } from "./";
// ______________________________________________________
//
export function createReducer<S>(
  initialState: S,
  handleDraft: (draft: S, action: Action) => void
) {
  return (state = initialState, action: Action) => {
    return produce(state, (draft: S) => {
      handleDraft(draft, action);
    });
  };
}
