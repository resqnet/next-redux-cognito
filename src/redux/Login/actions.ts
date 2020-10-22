import { createAction as ca } from "@reduxjs/toolkit";
import { CognitoUser, ISignUpResult } from 'amazon-cognito-identity-js';

// ______________________________________________________
//
export const actions = {
  signIn: ca("Login/signin", (user:CognitoUser) => ({
    payload: { CognitoUser: user },
  })),
  signUp: ca("Login/signup", (user: ISignUpResult ) => ({
    payload: { CognitoUser: user },
  })),
  confirm: ca("Login/confirm", (user: ISignUpResult ) => ({
    payload: { CognitoUser: user },
  })),
  isLogin: ca("Login/islogin", (user: CognitoUser ) => ({
    payload: { CognitoUser: user },
  })),
  signOut: ca("Login/signout", () => ({
    payload: { },
  })),
};
