import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { IProduct } from "../../../model/IProductType";
import { ProfileMenu } from "../../../constant/Variables";
import { IInitialState, ISelectedCategory } from "./Types";
import { asyncDataInitialState } from "../../../constant/Types";

const initialState: IInitialState = {
  categories: [],
  allProducts: asyncDataInitialState,
  homeProducts: [] as IProduct[],
  searchList: [] as IProduct[],
  PreOrderList: {
    list: [] as IProduct[],
    isPreorderLoading: false,
  },
  selectedCategory: {
    mc: "",
    sc: "",
  } as ISelectedCategory,
  selectedAccountView: ProfileMenu.MyProfile,
  searchValue: "",
  featureProduct: [] as IProduct[],
};

export const Slice = createSlice({
  initialState,
  name: "NavSLice",
  reducers: Reducer,
});

export { Slice as NavSLice };

export const {
  getCategories,
  getAllProducts,
  getPreOrderList,
  setselectedAccountView,
  getSearchList,
  getSearchValue,
  getHomeProducts,
  getFeatureProducts,
} = Slice.actions;
