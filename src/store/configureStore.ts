import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CombinedState, configureStore, Reducer } from "@reduxjs/toolkit";
import { Context, createWrapper } from "next-redux-wrapper";
import rootReducer, { RootStates } from "./reducer";

const store = configureStore({
  reducer: rootReducer as Reducer<CombinedState<RootStates>>,
  devTools: true,
});

const makeStore = (context: Context) => {
  return store;
};

const wrapper = createWrapper(makeStore);

export type AppDispatch = typeof store.dispatch;

export default wrapper;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootStates> = useSelector;
