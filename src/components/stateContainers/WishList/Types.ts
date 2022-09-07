import { IProduct } from "../../../model/IProductType";


export interface IInitialState {
  addIFav: boolean;
  getFav: IProduct[];
  removeFav: boolean;
}
