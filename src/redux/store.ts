// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./watchlistSlice";

const store = configureStore({
  reducer: {
    watchlist: watchlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
