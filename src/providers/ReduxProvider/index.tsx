import { initStore } from "@/redux";
import React from "react";
import { Provider } from "react-redux";
import { useRouterActionDispatcher } from "./useRouterActionDispatcher";
// ______________________________________________________
//
type Props = {
  loading: React.ReactNode;
};
// ______________________________________________________
//
const ReduxProvider: React.FC<Props> = (props) => {
  const { store } = initStore();
  useRouterActionDispatcher(store);
  if (store === undefined) {
    return <>{props.loading}</>;
  }
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxProvider;
