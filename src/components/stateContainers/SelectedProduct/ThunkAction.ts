import { handleErrorResponse } from "../../common/Script";
import { setSpinnerLoad } from "../Spinner/Slice";
import { deliveryService, showProductService } from "./Services";
import { SelectedProductSlice } from "./Slice";

export const getProduct = (item: any) => {
  return async (dispatch: any, _getState: any) => {
    dispatch(setSpinnerLoad(true));
    showProductService(item)
      .then((res) => {
        const selectedProduct = {
          from: "list",
          productDetails: res,
        };
        dispatch(
          SelectedProductSlice.actions.setSelectedProduct(selectedProduct)
        );
        localStorage.setItem(
          "selected-product",
          JSON.stringify(selectedProduct)
        );
        setTimeout(() => {
          dispatch(setSpinnerLoad(false));
        }, 1000);
      })
      .catch((error) => {
        console.log("Error", error);
        dispatch(setSpinnerLoad(false));
        handleErrorResponse(error);
      });
  };
};

export const fetchDelivery = (item: any) => {
  return async (dispatch: any, _getState: any) => {
    deliveryService(item)
      .then((res) => {
        dispatch(SelectedProductSlice.actions.setDeliveryStatus(res));
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
};
