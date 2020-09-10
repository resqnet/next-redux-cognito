import type { ErrorObject } from "@/utils/error";
import { createReducer as cr } from "../helpers";
import { actions, QueueItem } from "./";
// ______________________________________________________
//
export type State = {
  queue: QueueItem[];
  doneAll: boolean;
  err: ErrorObject | null;
};
// ______________________________________________________
//
export const state: State = {
  queue: [],
  doneAll: false,
  err: null,
};
// ______________________________________________________
//
export const reducer = cr(state, (draft, action) => {
  switch (action.type) {
    case actions.start.type:
      // 発生した request を queue に入れる
      draft.queue.push(action.payload);
      draft.doneAll = false;
      break;
    case actions.failed.type:
      draft.err = action.payload.err;
    case actions.completed.type:
    case actions.failed.type:
      // 処理が完了した request を queue から除く
      const next = draft.queue.filter(({ url }) => url !== url);
      draft.queue = next;
      draft.doneAll = next.length === 0;
      break;
  }
});
