import { Action, ThunkAction } from "@/redux";
import { createErrorObjectByMessage, ErrorObject } from "@/utils/error";
import { fetcher } from "@/utils/fetcher";
import { actions } from "./";
// ______________________________________________________
//
export const thunks = {
  fetch: <T>({
    url,
    init,
    onSucceed,
    onFailed,
  }: {
    url: RequestInfo;
    init?: RequestInit;
    onSucceed?: (data: T) => Action;
    onFailed?: (err: ErrorObject) => Action;
  }): ThunkAction<T> => (dispatch) => {
    dispatch(actions.start({ url, init }));
    return fetcher<T>(url, init)
      .then((data) => {
        dispatch(actions.completed({ url, init, data }));
        if (onSucceed !== undefined) dispatch(onSucceed(data));
        return data;
      })
      .catch((e: Error) => {
        const err = createErrorObjectByMessage(e.message);
        // AppRequest Reducer に ErrorObject を保持
        dispatch(actions.failed({ url, init, err }));
        // 失敗時 callback ActionCreator が指定されていれば dispatch
        if (onFailed !== undefined) {
          dispatch(onFailed(err));
        }
        // fetch thunk 使用箇所で catch
        throw new Error(err.message);
      });
  },
};
