import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
  },
});
