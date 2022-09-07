import { IAddress } from "../../../model/IProductType";
import { IAddAddress } from "./Service";

export interface IAddressList {
  address: IAddress[] | any;
  uName: string;
  uPhone: string;
  userid: 0;
}

export interface ISelectedAddress {
  address: IAddress;
  uName: string;
  uPhone: string;
  userid: number;
}

// InitialState
export interface IInitialState {
  addDeliveryAddress: boolean;
  addressList: IAddressList;
  removeDeliveryAddress: boolean;
  EditedAddress: IAddAddress;
  selectedAddress: ISelectedAddress;
}
