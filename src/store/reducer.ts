import { AnyAction, CombinedState, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import uiSlice, { UiState } from "./slices/uiSlice";

interface IRootStates {
  ui: UiState;
}

const rootReducer = (state: IRootStates, action: AnyAction): CombinedState<IRootStates> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        ui: uiSlice,
      });
      return combinedReducer(state, action);
    }
  }
};

export type RootStates = ReturnType<typeof rootReducer>;

export default rootReducer;
