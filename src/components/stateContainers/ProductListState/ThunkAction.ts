import { asyncDataInitialState } from "../../../constant/Types";
import { handleErrorResponse } from "../../common/Script";
import { getshopByPdtsService } from "./Service";
import { ProductListSlice } from "./Slice";

export const fetchShopbyProducts = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(
      ProductListSlice.actions.setShopbyproducts({
        ...asyncDataInitialState,
        loading: true,
      })
    );
    try {
      const response = await getshopByPdtsService();
      dispatch(
        ProductListSlice.actions.setShopbyproducts({
          ...asyncDataInitialState,
          data: response,
        })
      );
    } catch (error) {
      handleErrorResponse(error);
      dispatch(
        ProductListSlice.actions.setShopbyproducts({
          ...asyncDataInitialState,
          error: "Error",
        })
      );
    }
  };
};
