import { handleErrorResponse } from "../../common/Script";
import { getOrderService, placeOrderService } from "./Service";
import { getOrder, getPlaceOrder } from "./Slice";
import { IOrder, IPlaceOrder } from "./Types";

export const placeOrderAction = (item: IPlaceOrder) => {
  return async (dispatch: any, getState: any) => {
    localStorage.removeItem("cartItems");
    try {
      const response: any = await placeOrderService(item);
      if (response) {
        dispatch(getPlaceOrder(true));
      }
    } catch (error) {
      dispatch(getPlaceOrder(false));
    }
  };
};

export const getOrderAction = (item: any) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response: IOrder[] = await getOrderService(item);
      dispatch(getOrder(response));
    } catch (error) {
      console.log("Something Went Order");
      handleErrorResponse(error);
    }
  };
};
