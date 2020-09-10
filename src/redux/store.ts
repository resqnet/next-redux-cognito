import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer, StoreState } from "./";
// ______________________________________________________
//
export const initStore = (initialState: Partial<StoreState> = {}) => {
  return {
    store: createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunk))
    ),
  };
};
