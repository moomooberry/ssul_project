import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./modules";

export const store = configureStore({
  reducer: rootReducer,
});

export type RootStore = typeof store;

export const wrapper = createWrapper<RootStore>(() => store);
