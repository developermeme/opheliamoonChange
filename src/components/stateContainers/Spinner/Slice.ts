import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { IInitialState } from "./Types";

const initialState: IInitialState = {
  isLoading: false,
};

export const Slice = createSlice({
  initialState,
  name: "spinner-reducer",
  reducers: Reducer,
});

export { Slice as spinnerSlice };

export const { setSpinnerLoad } = Slice.actions;
