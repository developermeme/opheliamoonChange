import { PayloadAction } from "@reduxjs/toolkit";
import { IViewCartResponse } from "../../../model/IProductType";
import { IInitialState } from "./Types";

export const Reducer = {
  getViewCartItem: (
    state: IInitialState,
    action: PayloadAction<IViewCartResponse>
  ): void => {
    state.viewCartItem = action.payload;
  },
  removeCartItem: (
    state: IInitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.removeCartItem = action.payload;
  },
  removeALLCartItem: (
    state: IInitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.removeAllCartItem = action.payload;
  },
  addCartItem: (state: IInitialState, action: PayloadAction<boolean>): void => {
    state.addItem = action.payload;
  },
};
