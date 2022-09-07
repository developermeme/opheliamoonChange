import { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../model/IProductType";
import { IInitialState } from "./Types";

export const Reducer = {
  getFavItem: (
    state: IInitialState,
    action: PayloadAction<Array<IProduct>>
  ): void => {
    state.getFav = action.payload;
  },
  removeFavItem: (
    state: IInitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.removeFav = action.payload;
  },
  addFavItem: (state: IInitialState, action: PayloadAction<boolean>): void => {
    state.addIFav = action.payload;
  },
};
