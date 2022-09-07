import { DeliveryServices } from "../../../utils/API";

export interface IGetAddress {
  phone: string;
}

export interface IDeleteAddress {
  id: number;
}

export interface IAddAddress {
  name: string;
  phone: string;
  flatNo: string;
  street: string;
  landMark: string;
  city: string;
  pin: string;
  uPhone?: number;
  addId?: number;
  userId?: {
    userId: number;
    uPhone: string;
    uName: String;
  };
}

export const getAddressListService = async (
  item: IGetAddress
): Promise<any> => {
  return DeliveryServices.getAddress(item)
    .then((res: any) => res.data)
    .catch((error: any) => error);
};

export const addNewAdrdressService = async (
  item: IAddAddress
): Promise<any> => {
  return DeliveryServices.addAddress(item)
    .then((res: any) => res)
    .catch((error: any) => error);
};

export const updateNewAddressService = async (
  item: IAddAddress
): Promise<any> => {
  return DeliveryServices.updateAddress(item)
    .then((res: any) => res.status)
    .catch((error: any) => error);
};

export const deleteAddressService = async (
  item: IDeleteAddress
): Promise<any> => {
  return DeliveryServices.deleteAddress(item)
    .then((res: any) => res.status)
    .catch((error: any) => error);
};
