import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { IInitialState, INotification } from "./Types";

const initialState: IInitialState = {
  notifications: {
    isOpen: false,
    text: "",
  } as INotification,
};

export const Slice = createSlice({
  initialState,
  name: "notifications",
  reducers: Reducer,
});

export { Slice as ToastSlice };

export const { addNotification, removeNotification } = Slice.actions;
