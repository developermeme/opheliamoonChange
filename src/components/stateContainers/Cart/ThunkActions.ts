import { toast } from "react-toastify";
import { handleErrorResponse, LoggedInUser } from "../../common/Script";
import { setSpinnerLoad } from "../Spinner/Slice";
import {
  addCartService,
  deleteAllCartService,
  deleteCartService,
  viewCartService,
} from "./Service";
import { addCartItem, getViewCartItem } from "./Slice";

export const ViewCart = (UserId: any) => {
  return async (dispatch: any, _getState: any) => {
    dispatch(setSpinnerLoad(true));
    viewCartService(UserId)
      .then((res) => {
        dispatch(getViewCartItem(res));
        dispatch(setSpinnerLoad(false));
      })
      .catch((error) => {
        console.log("Error", error);
        dispatch(setSpinnerLoad(false));
        handleErrorResponse(error);
      });
  };
};

export const AddToCart = (item: any) => {
  return async (dispatch: any, _getState: any) => {
    try {
      const response: any = await addCartService(item);
      if (response === 200) {
        dispatch(ViewCart({ cusId: LoggedInUser as string }));
      }
    } catch (error) {
      dispatch(addCartItem(false));
      handleErrorResponse(error);
    }
  };
};

export const DeleteCart = (id: any) => {
  return async (dispatch: any, _getState: any) => {
    deleteCartService(id)
      .then((_res) => {
        // window.location.reload();
        toast.success("Removed From Cart");

        dispatch(ViewCart({ cusId: LoggedInUser as string }));
      })
      .catch((error) => {
        console.log("Error - ", error);
        handleErrorResponse(error);
      });
  };
};

export const DeleteAllCart = (id: any) => {
  return async (dispatch: any, _getState: any) => {
    deleteAllCartService(id)
      .then((_res) => {
        // window.location.reload();
        toast.success("Removed All Cart Items");
        dispatch(ViewCart({ cusId: LoggedInUser as string }));
      })
      .catch((error) => {
        console.log("Error - ", error);
        handleErrorResponse(error);
      });
  };
};
