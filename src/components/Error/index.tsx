import { createError, ErrorObject } from "@/utils/error";
import React from "react";
// ______________________________________________________
//
type Props = {
  err?: ErrorObject;
};
// ______________________________________________________
//
export const Error: React.FC<Props> = (props) => (
  <>
    <h1>{props.err?.message}</h1>
    <p>
      {(() => {
        switch (props.err?.message) {
          case "INVALID_TOKEN":
            return "認証が無効になりました。再度ログインをお願いします。";
          case "UNAUTHORIZED":
            return "ログインが必要です。こちらからログインしてください。";
          case "NOT_FOUND":
            return "ページが見つかりませんでした。";
          case "NETWORK_ERROR":
            return "ネットワークエラーが発生しました。";
          default:
            return "システムエラーが発生しています。";
        }
      })()}
    </p>
  </>
);

Error.defaultProps = {
  err: createError(999),
};

export default Error;
