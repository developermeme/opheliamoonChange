import { PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "./Types";

export const Reducer = {
  setSpinnerLoad: (
    state: IInitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.isLoading = action.payload;
  },
};
