import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { IInitialState } from "./Types";

const initialState: IInitialState = {
  selectedLink: "",
};

export const Slice = createSlice({
  initialState,
  name: "footer-reducer",
  reducers: Reducer,
});

export { Slice as FooterSlice };

export const { setSelectedLink } = Slice.actions;
