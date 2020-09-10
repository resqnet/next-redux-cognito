import { createReducer as cr } from "../helpers";
import { actions } from "./";
// ______________________________________________________
//
export type State = {
  count: number;
};
// ______________________________________________________
//
export const state: State = {
  count: 1,
};
// ______________________________________________________
//
export const reducer = cr(state, (draft, action) => {
  switch (action.type) {
    case actions.increment.type:
      draft.count++;
      break;
    case actions.decrement.type:
      draft.count--;
      break;
    case actions.ntimes.type:
      draft.count *= action.payload.n;
      break;
  }
});
