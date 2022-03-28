import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import requestReducer from "./requestSlice";
import pageReducer from "./pageSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    request: requestReducer,
    page: pageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
