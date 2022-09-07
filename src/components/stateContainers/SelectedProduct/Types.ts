import { IProduct } from "../../../model/IProductType";

export interface ISelectedProduct {
  from: string;
  productDetails: IProduct;
}

export interface IUpdatedProduct {
  productId: number;
  qty: number;
  cusId: string;
  size: string | any;
  price: number;
}

export enum ModalEnum {
  Size,
  Video,
  Empty,
}

export interface IInitialState {
  selectedProduct: ISelectedProduct;
  updatedProduct: IUpdatedProduct;
  selectedModal: ModalEnum;
  productItem: IProduct;
  deliveryStatus: string | null;
}
