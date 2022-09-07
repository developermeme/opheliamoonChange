import { PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "./Types";

export const Reducer = {
  setSelectedLink: (
    state: IInitialState,
    action: PayloadAction<string>
  ): void => {
    state.selectedLink = action.payload;
  },
};
