import { createAction as ca } from "@reduxjs/toolkit";
// ______________________________________________________
//
export const actions = {
  routeChangeStart: ca("AppRouter/routeChangeStart", (url: string) => ({
    payload: { url },
  })),
  routeChangeError: ca(
    "AppRouter/routeChangeError",
    (err: { message: string }, url: string) => ({
      payload: { url, err },
    })
  ),
  routeChangeComplete: ca("AppRouter/routeChangeComplete", (url: string) => ({
    payload: { url },
  })),
  beforeHistoryChange: ca("AppRouter/beforeHistoryChange", (url: string) => ({
    payload: { url },
  })),
  hashChangeStart: ca("AppRouter/hashChangeStart", (url: string) => ({
    payload: { url },
  })),
  hashChangeComplete: ca("AppRouter/hashChangeComplete", (url: string) => ({
    payload: { url },
  })),
};
