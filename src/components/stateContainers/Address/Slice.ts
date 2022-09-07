import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { IAddAddress } from "./Service";

import { IAddressList, IInitialState, ISelectedAddress } from "./Types";

const initialState: IInitialState = {
  addDeliveryAddress: false,
  addressList: {} as IAddressList,
  removeDeliveryAddress: false,
  EditedAddress: {} as IAddAddress,
  selectedAddress: {} as ISelectedAddress,
};

export const Slice = createSlice({
  initialState,
  name: "address-reducer",
  reducers: Reducer,
});

export { Slice as AddressSlice };

export const {
  getAddressList,
  addNewAddress,
  updateAddress,
  deleteAddress,
  SetEditedAddress,
  SetSelecteddAddress,
} = Slice.actions;
