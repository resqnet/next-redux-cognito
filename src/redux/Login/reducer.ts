import { createReducer as cr } from "../helpers";
import { actions } from "./";

// ______________________________________________________
//
export type State = {
  message: string,
  userInfo: {
    username: string
  }
};
// ______________________________________________________
//
export const state: State = {
  message: "",
  userInfo: {
    username: ""
  }
};
// ______________________________________________________
//
export const reducer = cr(state, (draft, action) => {
  switch (action.type) {
    case actions.signIn.type:
      const payloadUser = action.payload.CognitoUser;
      console.log(payloadUser);
      break;
    case actions.signUp.type:
      console.log(action.payload.CognitoUser);
      break;
    case actions.confirm.type:
      console.log(action.payload.CognitoUser);
      break;
  }
});
