import { AsyncData } from "../../../constant/Types";
import { IProduct } from "../../../model/IProductType";

export interface IView {
  mobile: string;
  desktop: string;
}

export interface IColor {
  id: number;
  color: string;
}

export interface IStone {
  id: number;
  stones: string;
}

export interface IMetal {
  id: number;
  metals: string;
}

export interface IShopbyProducts {
  id: number;
  name: string;
  url: string;
}

export interface IInitialState {
  isSortEnabled: boolean;
  toggleFilterInner: boolean;
  selectedListId: string | undefined;
  selectedColorId: string | undefined;
  selectedMetal: string | undefined;
  selectedStone: string | undefined;
  isRightviewEnabled: boolean;
  gridView: IView;
  sortedList: IProduct[];
  shopbyproducts: AsyncData<IShopbyProducts[]>;
}
