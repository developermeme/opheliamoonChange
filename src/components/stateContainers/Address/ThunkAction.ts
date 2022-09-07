import { toast } from "react-toastify";
import { handleErrorResponse, LoggedInUser } from "../../common/Script";
import {
  addNewAdrdressService,
  deleteAddressService,
  getAddressListService,
  IAddAddress,
  IDeleteAddress,
  IGetAddress,
  updateNewAddressService,
} from "./Service";
import { deleteAddress, getAddressList } from "./Slice";

export const getUserAddressList = (item: IGetAddress) => {
  return async (dispatch: any, getState: any) => {
    getAddressListService(item)
      .then((res) => {
        dispatch(getAddressList(res));
      })
      .catch((error) => {
        console.log("Error", error);
        handleErrorResponse(error);
      });
  };
};

export const addUserAddress = (item: any) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response: any = await addNewAdrdressService(item);
      if (response) {
        localStorage.setItem("selected-address-id", response.data.id);

        // toast.success("Successfully Added");
        // window.location.reload();
      }
    } catch (error) {
      console.log("Error", error);
      toast.error("Something Went Wrong");
      handleErrorResponse(error);
    }
  };
};

export const updateUserAddress = (item: IAddAddress) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response: any = await updateNewAddressService(item);
      if (response === 200) {
        toast.success("Successfully Updated");
        window.location.reload();
      }
    } catch (error) {
      console.log("Error", error);
      toast.error("Something Went Wrong");
      handleErrorResponse(error);
    }
  };
};

export const deleteUserAddress = (item: IDeleteAddress) => {
  return async (dispatch: any, getState: any) => {
    try {
      const response: any = await deleteAddressService(item);
      if (response === 200) {
        dispatch(getUserAddressList({ phone: LoggedInUser as string }));
        toast.success("Successfully Deleted");
      }
    } catch (error) {
      dispatch(deleteAddress(false));
      toast.error("Something Went Wrong");
       handleErrorResponse(error);
    }
  };
};
