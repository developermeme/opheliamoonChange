import { OrderServices } from "../../../utils/API";
import { IPlaceOrder } from "./Types";

export const placeOrderService = async (item: IPlaceOrder): Promise<any> => {
  return OrderServices.placeOrder(item)
    .then((res: any) => res.status)
    .catch((error: any) => error);
};

export const getOrderService = async (item: any): Promise<any> => {
  return OrderServices.getOrderByUserId(item)
    .then((res: any) => res.data)
    .catch((error: any) => error);
};
