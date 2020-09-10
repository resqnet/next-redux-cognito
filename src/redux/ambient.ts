import { Store } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Action, StoreState } from "./";
// ______________________________________________________
//
declare module "react-redux" {
  interface DefaultRootState extends StoreState {}
  export function useDispatch<
    T = ThunkDispatch<StoreState, never, Action>
  >(): T;
  export function useStore<S = DefaultRootState>(): Store<S, Action>;
}
