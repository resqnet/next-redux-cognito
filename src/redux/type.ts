import { InferActionType } from "@/redux/typeHelper";
import { ThunkAction as ReduxThunkAction } from "redux-thunk";
import * as AppRequest from "./AppRequest";
import * as AppRouter from "./AppRouter";
import * as Counter from "./Counter";
// 【Add New Line】
// ______________________________________________________
//
export type StoreState = {
  AppRequest: AppRequest.State;
  AppRouter: AppRouter.State;
  Counter: Counter.State;
  // 【Add New Line】
};
// ______________________________________________________
//
export type Action = InferActionType<
  | typeof AppRequest.actions
  | typeof AppRouter.actions
  | typeof Counter.actions
  // 【Add New Line】
>;
// ______________________________________________________
//
export type ThunkAction<R = unknown> = ReduxThunkAction<
  Promise<R>,
  StoreState,
  never,
  Action
>;
