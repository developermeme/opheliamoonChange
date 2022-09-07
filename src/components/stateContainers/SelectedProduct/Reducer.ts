import { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../../model/IProductType";
import {
  IInitialState,
  ISelectedProduct,
  IUpdatedProduct,
  ModalEnum,
} from "./Types";

export const Reducer = {
  setSelectedProduct: (
    state: IInitialState,
    action: PayloadAction<ISelectedProduct>
  ): void => {
    state.selectedProduct = action.payload;
  },
  setUpdatedProduct: (
    state: IInitialState,
    action: PayloadAction<IUpdatedProduct>
  ): void => {
    state.updatedProduct = action.payload;
  },
  setSelectedModal: (
    state: IInitialState,
    action: PayloadAction<ModalEnum>
  ): void => {
    state.selectedModal = action.payload;
  },
  setProductItem: (
    state: IInitialState,
    action: PayloadAction<IProduct>
  ): void => {
    state.productItem = action.payload;
  },
  setDeliveryStatus: (
    state: IInitialState,
    action: PayloadAction<string | any>
  ): void => {
    state.deliveryStatus = action.payload;
  },
};
