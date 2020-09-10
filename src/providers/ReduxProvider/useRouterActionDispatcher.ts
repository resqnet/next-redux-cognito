import { Action, StoreState } from "@/redux";
import { actions } from "@/redux/AppRouter";
import Router from "next/router";
import React from "react";
import { CombinedState, Store } from "redux";
// ______________________________________________________
//
export function useRouterActionDispatcher(
  store: Store<CombinedState<StoreState>, Action>
) {
  React.useEffect(() => {
    if (!store) return;
    const handleRouteChangeStart = (url: string) => {
      store.dispatch(actions.routeChangeStart(url));
    };
    const handleRouteChangeError = (err: Error, url: string) => {
      store.dispatch(actions.routeChangeError(err, url));
    };
    const handleRouteChangeComplete = (url: string) => {
      store.dispatch(actions.routeChangeComplete(url));
    };
    const handleBeforeHistoryChange = (url: string) => {
      store.dispatch(actions.beforeHistoryChange(url));
    };
    const handleHashChangeStart = (url: string) => {
      store.dispatch(actions.hashChangeStart(url));
    };
    const handleHashChangeComplete = (url: string) => {
      store.dispatch(actions.hashChangeComplete(url));
    };
    if (typeof window !== "undefined") {
      const url = window.location.pathname + window.location.hash;
      store.dispatch(actions.routeChangeStart(url));
    }
    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeError", handleRouteChangeError);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("beforeHistoryChange", handleBeforeHistoryChange);
    Router.events.on("hashChangeStart", handleHashChangeStart);
    Router.events.on("hashChangeComplete", handleHashChangeComplete);
    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeError", handleRouteChangeError);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("beforeHistoryChange", handleBeforeHistoryChange);
      Router.events.off("hashChangeStart", handleHashChangeStart);
      Router.events.off("hashChangeComplete", handleHashChangeComplete);
    };
  }, [store]);
}
