import { asyncDataInitialState } from "../../../constant/Types";
import { handleErrorResponse } from "../../common/Script";
import { setSpinnerLoad } from "../Spinner/Slice";
import {
  getAllProductsAPI,
  getCategoriesAPI,
  getFeaturedProductsAPI,
  getHomePdtsAPI,
  getPreOrderAPI,
  getSearchAPI,
} from "./Services";
import {
  getAllProducts,
  getCategories,
  getFeatureProducts,
  getHomeProducts,
  getPreOrderList,
  getSearchList,
} from "./Slice";

export function fetchCategories() {
  return async (dispatch: (arg0: any) => void) => {
    dispatch(setSpinnerLoad(true));
    try {
      const response = await getCategoriesAPI();
      dispatch(getCategories(response));
      dispatch(setSpinnerLoad(false));
    } catch (error) {
      handleErrorResponse(error);
      dispatch(setSpinnerLoad(false));
    }
  };
}

export function fetchHomePdts() {
  return async (dispatch: (arg0: any) => void) => {
    dispatch(
      getAllProducts({
        ...asyncDataInitialState,
        loading: true,
      })
    );
    try {
      const response = await getHomePdtsAPI();
      dispatch(getHomeProducts(response));
      dispatch(
        getAllProducts({
          ...asyncDataInitialState,
          data: response,
        })
      );
    } catch (error) {
      handleErrorResponse(error);
      dispatch(
        getAllProducts({
          ...asyncDataInitialState,
          error: "Error",
        })
      );
    }
  };
}

export const fetchAllProducts = (item: any, template?: any) => {
  return async (dispatch: any, getState: any) => {
    dispatch(
      getAllProducts({
        ...asyncDataInitialState,
        loading: true,
      })
    );
    try {
      const response = await getAllProductsAPI(item);
      dispatch(
        getAllProducts({
          ...asyncDataInitialState,
          data: response,
        })
      );
    } catch (error) {
      handleErrorResponse(error);
      dispatch(
        getAllProducts({
          ...asyncDataInitialState,
          error: "Error",
        })
      );
    }
  };
};

export const fetchFeaturedProducts = (item: any) => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSpinnerLoad(true));
    try {
      const response = await getFeaturedProductsAPI(item);
      localStorage.setItem("feature-product", JSON.stringify(response));
      dispatch(getFeatureProducts(response));
      dispatch(setSpinnerLoad(false));
    } catch (error) {
      handleErrorResponse(error);
      dispatch(setSpinnerLoad(false));
    }
  };
};

export const fetchSearchProducts = (item: any) => {
  return async (dispatch: any, getState: any) => {
    dispatch(setSpinnerLoad(true));
    try {
      const response = await getSearchAPI(item);
      dispatch(getSearchList(response));
      dispatch(setSpinnerLoad(false));
    } catch (error) {
      handleErrorResponse(error);
      dispatch(setSpinnerLoad(false));
    }
  };
};

export function fetchPreOrderList() {
  return async (dispatch: (arg0: any) => void) => {
    dispatch(
      getPreOrderList({
        list: [],
        isPreorderLoading: true,
      })
    );
    try {
      dispatch(setSpinnerLoad(true));
      const response = await getPreOrderAPI();
      await dispatch(
        getPreOrderList({
          list: response,
          isPreorderLoading: false,
        })
      );
    } catch (error) {
      handleErrorResponse(error);
      dispatch(
        getPreOrderList({
          list: [],
          isPreorderLoading: false,
        })
      );
    }
  };
}
