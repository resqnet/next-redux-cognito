//import { ThunkAction } from "redux-thunk";
import { actions } from "./actions"
import { ThunkAction } from "@/redux";
import Amplify, { Auth } from "aws-amplify";
import { CognitoUser, ISignUpResult } from 'amazon-cognito-identity-js';
import { resolve } from "dns";

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
type LoginUser = ThunkAction<{cognitoUser: CognitoUser}>;
// ______________________________________________________
//
export const thunks = {
  isLogin: (): ThunkAction<LoginUser> => (dispatch) => {
    return new Promise(()=>{
      Auth.currentAuthenticatedUser().then((user: CognitoUser)=>{
        dispatch(actions.isLogin(user));
      });
    });
  },
  signOut: (): ThunkAction<void> => (dispatch) => {
    return new Promise(()=>{
      Auth.signOut().then(()=>{
        dispatch(actions.signOut());
      });
    });
  },
  customAuthChallenge: (id: string,code: string) : ThunkAction<CognitoUser> => (dispatch) => {
    return new Promise((resolve)=> {
      Auth.signIn(id).then((user: CognitoUser)=>{
        Auth.sendCustomChallengeAnswer(user, code).then((user: CognitoUser)=>{
          resolve(user);
        }).catch((e) => {
          console.log(e.message);
        });
      });
    });
  },
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
