import { applyMiddleware, compose, createStore, Store } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import createRootReducer, { IRootState } from "../reducer/CombineReducer";

export const composeStore = (): any => compose(applyMiddleware(thunk));

export const getStore = (): Store<IRootState> => {
  const store = createStore(createRootReducer(), composeStore());
  return store;
};
