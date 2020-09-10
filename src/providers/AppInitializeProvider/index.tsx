import { ErrorObject } from "@/utils/error";
import React from "react";
import { useInitialDataFetcher } from "./useInitialDataFetcher";
// ______________________________________________________
//
type Props = {
  loading: React.ReactNode;
  renderError: (err?: ErrorObject) => React.ReactNode;
};
// ______________________________________________________
//
const AppInitializeProvider: React.FC<Props> = (props) => {
  const { fetchStatus, error } = useInitialDataFetcher();
  switch (fetchStatus) {
    case "pending":
    case "progress":
      return <>{props.loading}</>;
    case "rejected":
      return <>{props.renderError(error)}</>;
    default:
      return <>{props.children}</>;
  }
};

export default AppInitializeProvider;
