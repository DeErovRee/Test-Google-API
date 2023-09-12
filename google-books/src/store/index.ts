import { configureStore } from "@reduxjs/toolkit";
// @ts-ignore
import { searchReducer } from "./searchSlice.ts";

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
