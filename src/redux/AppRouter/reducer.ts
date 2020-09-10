import { createReducer as cr } from "../helpers";
import { actions } from "./actions";
// ______________________________________________________
//
export type State = {
  url: string;
};
// ______________________________________________________
//
export const state: State = {
  url: "",
};
// ______________________________________________________
//
export const reducer = cr(state, (draft, action) => {
  switch (action.type) {
    case actions.routeChangeStart.type:
    case actions.routeChangeError.type:
    case actions.routeChangeComplete.type:
      draft.url = action.payload.url;
      break;
  }
});
