import { createErrorObjectByMessage, ErrorObject } from "@/utils/error";
import React from "react";
import { useDispatch } from "react-redux";
// ______________________________________________________
//
export type PromiseState = "pending" | "progress" | "resolved" | "rejected";
// ______________________________________________________
//
// エラー発生時の表示を確認する関数（リリース時削除

export function errorExample(errorMessage?: string) {
  return new Promise((_, reject) => {
    reject(new Error(errorMessage));
  });
}
// ______________________________________________________
//
export const useInitialDataFetcher = () => {
  const [fetchStatus, setFetchStatus] = React.useState<PromiseState>("pending");
  const [error, setError] = React.useState<ErrorObject | undefined>(undefined);
  const dispatch = useDispatch();
  React.useEffect(() => {
    // App初期レンダリング時、変化の少ないデータかつ
    // 汎用的に再利用するデータは、ここで初期ロードしてしまう。
    Promise.all([
      // errorExample('something wrong')
      // 【Add New Line】 ex:) dispatch(V1Tags.thunks.get()),
    ])
      .then(() => {
        setFetchStatus("resolved");
      })
      .catch((err: Error) => {
        setError(createErrorObjectByMessage(err.message));
        setFetchStatus("rejected");
      });
  }, []);
  return { fetchStatus, error };
};
