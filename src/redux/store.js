import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import coinsReducer from "./slices/coins";
import userReducer from "./slices/user";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: {
    coins: coinsReducer,
    user: userReducer,
  },
  middleware,
  devTools: process.env.REACT_APP_ENV === "development",
});
