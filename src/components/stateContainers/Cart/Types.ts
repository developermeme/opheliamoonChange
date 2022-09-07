import { IViewCartResponse } from "../../../model/IProductType";


export interface IInitialState {
  addItem: boolean;
  removeCartItem: boolean;
  removeAllCartItem: boolean;
  viewCartItem: IViewCartResponse;
}
