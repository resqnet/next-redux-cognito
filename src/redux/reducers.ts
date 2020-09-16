import { combineReducers, ReducersMapObject } from "redux";
import { Action, StoreState } from "./";
import * as AppRequest from "./AppRequest";
import * as AppRouter from "./AppRouter";
import * as Counter from "./Counter";
import * as Login from "./Login";

// 【Add New Line】
// ______________________________________________________
//
export const reducers: ReducersMapObject<StoreState, Action> = {
  AppRequest: AppRequest.reducer,
  AppRouter: AppRouter.reducer,
  // 【Add New Line】
  Counter: Counter.reducer,
  Login: Login.reducer,
};

export const rootReducer = combineReducers(reducers);
