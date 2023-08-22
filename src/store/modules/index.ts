import { AnyAction, Reducer, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import auth, { AuthState } from "./auth";

export interface RootState {
  auth: AuthState;
}

const rootReducer: Reducer<RootState, AnyAction> = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return combineReducers({ auth })(state, action);
  }
};

export default rootReducer;
