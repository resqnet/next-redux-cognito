import { ActionCreatorWithPreparedPayload as ACWPP } from "@reduxjs/toolkit";
// ______________________________________________________
//
type Unbox<T> = T extends { [K in keyof T]: infer I } ? I : never;
// ______________________________________________________
//
type ACWPP_2_Action<T> = T extends ACWPP<any, infer P, infer K>
  ? { type: K; payload: P }
  : never;
type ACWPP_2_ActionMap<T> = { [K in keyof T]: ACWPP_2_Action<T[K]> };
type ACWPP_Payload<T> = T extends ACWPP<any, infer I> ? I : never;
export type InferActionType<T> = Unbox<ACWPP_2_ActionMap<T>>;
export type InferPayload<T> = { [K in keyof T]: ACWPP_Payload<T[K]> };
