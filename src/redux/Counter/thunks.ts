//import { ThunkAction } from "redux-thunk";
import { actions } from "./actions"
import { ThunkAction } from "@/redux";

// ______________________________________________________
//
type NTimes = ThunkAction<number>;
// ______________________________________________________
//
export const thunks = {
  ntimes: (n: number) : NTimes => (dispatch) => {
    return new Promise(()=>{ dispatch(actions.ntimes(n)); return; });
  }
};
