//import { ThunkAction } from "redux-thunk";
import { actions } from "./actions"
import { ThunkAction } from "@/redux";
import Amplify, { Auth } from "aws-amplify";
import { CognitoUser, ISignUpResult } from 'amazon-cognito-identity-js';

// ______________________________________________________
//
Amplify.configure({
  Auth: {
    // TODO replace for your environment
    region: process.env.COGNITO_REGION,
    userPoolId: process.env.COGNITO_USERPOOL_ID,
    userPoolWebClientId: process.env.OGNITO_CLIENT_ID,
    mandatorySignIn: false,
    authenticationFlowType: "USER_PASSWORD_AUTH",
  },
});

// ______________________________________________________
//
type LoginInfo = ThunkAction<{id: string , pass: string}>;
type ConfirmInfo = ThunkAction<{verification: number}>;
// ______________________________________________________
//
export const thunks = {
  signIn: (id: string, pass: string) : LoginInfo => (dispatch) => {
    return new Promise(()=>{
      Auth.signIn(id, pass)
        .then((user:CognitoUser)=>{
          dispatch(actions.signIn(user));
        })
        .catch((e) => {
          console.log(e.message);
      });
    });
  },
  signUp: (id: string, pass: string) : LoginInfo => (dispatch) => {
    return new Promise(()=>{
      Auth.signUp(id, pass)
        .then((user:ISignUpResult)=>{
          dispatch(actions.signUp(user));
        })
        .catch((e) => {
          console.log(e.message);
      });
    });
  },
  confirm: (email: string ,verification: string) : ConfirmInfo => (dispatch) => {
    return new Promise(()=>{
      Auth.confirmSignUp(email, verification)
        .then((user:ISignUpResult)=>{
          dispatch(actions.confirm(user));
        })
        .catch((e) => {
          console.log(e.message);
      });
    });
  }
};
