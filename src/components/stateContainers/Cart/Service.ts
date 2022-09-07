import { CartServices } from "../../../utils/API";

export const addCartService = async (item: any): Promise<any> => {
  return CartServices.addCart(item)
    .then((res: any) => res.status)
    .catch((error: any) => error);
};

export const viewCartService = async (userId: any): Promise<any> => {
  return CartServices.viewCart(userId)
    .then((res: any) => res.data)
    .catch((error: any) => error);
};

export const deleteCartService = async (id: any): Promise<any> => {
  return CartServices.deleteCartItem(id)
    .then((res: any) => res.status)
    .catch((error: any) => error);
};

export const deleteAllCartService = async (id: any): Promise<any> => {
  return CartServices.deleteCart(id)
    .then((res: any) => res.status)
    .catch((error: any) => error);
};
