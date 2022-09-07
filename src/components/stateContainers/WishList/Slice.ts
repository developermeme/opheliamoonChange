import { createSlice } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import { IInitialState } from "./Types";

const initialState: IInitialState = {
  addIFav: false,
  getFav: [],
  removeFav: false,
};

export const Slice = createSlice({
  initialState,
  name: "wishlist-reducer",
  reducers: Reducer,
});

export { Slice as FavSlice };

export const { getFavItem, removeFavItem, addFavItem } = Slice.actions;
