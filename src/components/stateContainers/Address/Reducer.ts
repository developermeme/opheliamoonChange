import { PayloadAction } from "@reduxjs/toolkit";
import { IAddAddress } from "./Service";
import { IAddressList, IInitialState, ISelectedAddress } from "./Types";

export const Reducer = {
  getAddressList: (
    state: IInitialState,
    action: PayloadAction<IAddressList>
  ): void => {
    state.addressList = { ...action.payload };
  },
  addNewAddress: (
    state: IInitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.addDeliveryAddress = action.payload;
  },
  updateAddress: (
    state: IInitialState,
    action: PayloadAction<IAddressList>
  ): void => {
    state.addressList = { ...action.payload };
  },
  deleteAddress: (
    state: IInitialState,
    action: PayloadAction<boolean>
  ): void => {
    state.removeDeliveryAddress = action.payload;
  },
  SetEditedAddress: (
    state: IInitialState,
    action: PayloadAction<IAddAddress>
  ): void => {
    state.EditedAddress = action.payload;
  },
  SetSelecteddAddress: (
    state: IInitialState,
    action: PayloadAction<ISelectedAddress>
  ): void => {
    state.selectedAddress = action.payload;
  },
};
