import { createAction as ca } from "@reduxjs/toolkit";
// ______________________________________________________
//
export const actions = {
  increment: ca("Counter/increment", () => ({
    payload: {  },
  })),
  decrement: ca("Counter/decrement", ( ) => ({
    payload: {  },
  })),
  ntimes: ca("Counter/ntimes", (n: number) => ({
    payload: { n },
  })),
};
