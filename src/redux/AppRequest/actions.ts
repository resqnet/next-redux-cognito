import type { ErrorObject } from "@/utils/error";
import { createAction as ca } from "@reduxjs/toolkit";
// ______________________________________________________
//
export type QueueItem = {
  url: RequestInfo;
  init?: RequestInit;
};
// ______________________________________________________
//
export const actions = {
  start: ca("AppRequest/start", (payload: QueueItem) => ({
    payload,
  })),
  completed: ca(
    "AppRequest/completed",
    (payload: QueueItem & { data: any }) => ({ payload })
  ),
  failed: ca(
    "AppRequest/failed",
    (payload: QueueItem & { err: ErrorObject }) => ({
      payload,
    })
  ),
};
