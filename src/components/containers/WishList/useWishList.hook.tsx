import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { onClick } from "../../../constant/Types";
import { IProduct } from "../../../model/IProductType";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import {
  getProductDetails,
  LoggedInUser,
  updateLocalCart,
} from "../../common/Script";
import {
  AddFavItem,
  GetFavItem,
} from "../../stateContainers/WishList/ThunkActions";

export const useWishList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { favData } = useSelector((state: IRootState) => state);
  const favItems: IProduct[] = favData && favData.getFav;

  const FetchWishList = () => {
    if ((LoggedInUser as string) !== "") {
      dispatch(GetFavItem({ phone: LoggedInUser as string }));
    } else {
      navigate("/auth/login");
    }
  };

  const handleAddToCartClick = (
    e: onClick,
    updatedProduct: any,
    item: IProduct
  ) => {
    e.preventDefault();
    const selectedProduct = getProductDetails(item, updatedProduct);
    updateLocalCart(selectedProduct);
    toast.success("Added to cart");
  };

  const handleDeleteClick = (id: any) => {
    if ((LoggedInUser as string) !== "") {
      const item = {
        phone: LoggedInUser as string,
        pId: id,
      };
      dispatch(AddFavItem(item));
    }
  };

  return {
    favData,
    favItems,
    handleAddToCartClick,
    handleDeleteClick,
    FetchWishList,
  };
};
