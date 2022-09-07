import { PayloadAction } from "@reduxjs/toolkit";
import { IInitialState, IOrder } from "./Types";

export const Reducer = {
  getPlaceOrder: (
    state: IInitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.placeOrder = action.payload;
  },
  getOrder: (
    state: IInitialState,
    action: PayloadAction<Array<IOrder>>
  ): void => {
    state.orderList = action.payload;
  },
};
