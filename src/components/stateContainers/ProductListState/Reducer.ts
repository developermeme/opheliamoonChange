import { PayloadAction } from "@reduxjs/toolkit";
import { AsyncData } from "../../../constant/Types";
import { IProduct } from "../../../model/IProductType";
import {
  IInitialState,
  IShopbyProducts,
  IView,
} from "./Types";

export const Reducer = {
  setSortVisibility: (
    state: IInitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.isSortEnabled = action.payload;
  },
  settoggleFilterInner: (
    state: IInitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.toggleFilterInner = action.payload;
  },
  setSelectedListId: (
    state: IInitialState,
    action: PayloadAction<string | undefined>
  ): void => {
    state.selectedListId = action.payload;
  },
  setSelectedColorId: (
    state: IInitialState,
    action: PayloadAction<string | undefined>
  ): void => {
    state.selectedColorId = action.payload;
  },
  setSelectedMetal: (
    state: IInitialState,
    action: PayloadAction<string | undefined>
  ): void => {
    state.selectedMetal = action.payload;
  },
  setSelectedStone: (
    state: IInitialState,
    action: PayloadAction<string | undefined>
  ): void => {
    state.selectedStone = action.payload;
  },
  setRightFilterVisibility: (
    state: IInitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.isRightviewEnabled = action.payload;
  },
  setgridView: (state: IInitialState, action: PayloadAction<IView>): void => {
    state.gridView = action.payload;
  },
  setSortedList: (
    state: IInitialState,
    action: PayloadAction<IProduct[]>
  ): void => {
    state.sortedList = action.payload;
  },
  setShopbyproducts: (
    state: IInitialState,
    action: PayloadAction<AsyncData<IShopbyProducts[]>>
  ): void => {
    state.shopbyproducts = action.payload;
  },
};
