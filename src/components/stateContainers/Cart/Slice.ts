import { createSlice } from "@reduxjs/toolkit";
import { IViewCartResponse } from "../../../model/IProductType";
import { Reducer } from "./Reducer";
import { IInitialState } from "./Types";

const initialState: IInitialState = {
  addItem: false,
  removeCartItem: false,
  removeAllCartItem: false,
  viewCartItem: {} as IViewCartResponse,
};

export const Slice = createSlice({
  initialState,
  name: "cart-reducer",
  reducers: Reducer,
});

export { Slice as CartSlice };

export const {
  getViewCartItem,
  removeCartItem,
  removeALLCartItem,
  addCartItem,
} = Slice.actions;
