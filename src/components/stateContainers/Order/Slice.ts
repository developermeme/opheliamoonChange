import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { IInitialState, IOrder } from "./Types";

const initialState: IInitialState = {
  placeOrder: null,
  orderList: [] as IOrder[],
};

export const Slice = createSlice({
  initialState,
  name: "order-reducer",
  reducers: Reducer,
});

export { Slice as OrderSlice };

export const { getPlaceOrder, getOrder } = Slice.actions;
