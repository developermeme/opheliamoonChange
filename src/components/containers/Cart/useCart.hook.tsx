import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  ICartItemResponse,
  IProduct,
  IViewCartResponse,
} from "../../../model/IProductType";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import {
  DeleteItem,
  LoggedInUser,
  RemoveItem,
  updateLocalCart,
} from "../../common/Script";
import { ViewCart } from "../../stateContainers/Cart/ThunkActions";
import { AddFavItem } from "../../stateContainers/WishList/ThunkActions";
import { useWishList } from "../WishList/useWishList.hook";

export interface IAddCart {
  cartPId: string;
  custId: string;
  price: number;
  qty: number;
  size: string;
}

export const useCart = () => {
  //Types;
  interface IVIEWCART {
    cusId: string;
  }

  interface IDELETECART {
    cusId: string;
  }

  //Customer Id
  const UserId: IVIEWCART | IDELETECART = {
    cusId: LoggedInUser as string,
  };

  const navigate = useNavigate();
  const { favItems } = useWishList();
  const dispatch = useDispatch();
  //CartItem
  const FetchCartData = async () => {
    if (LoggedInUser) dispatch(ViewCart(UserId));
  };

  const { cartData } = useSelector((state: IRootState) => state);
  const { selectedProductData } = useSelector((state: IRootState) => state);
  const reduxtCartState = cartData && cartData.viewCartItem;
  const isAddedToCart = cartData && cartData.addItem;
  const updatedProduct =
    selectedProductData && selectedProductData.updatedProduct;

  let viewCart: IViewCartResponse = {} as IViewCartResponse;
  let cartItem = localStorage.getItem("cartItems");
  if (cartItem) viewCart = JSON.parse(cartItem as string);

  let result =
    viewCart.cartItem &&
    viewCart?.cartItem?.filter((item1: ICartItemResponse) =>
      favItems?.some(
        (item2: IProduct) => item1?.productInfo?.productCode === item2?.mcId
      )
    );

  const productCodes =
    result &&
    result.map((item: ICartItemResponse) => item.productInfo.productCode);

  const getProductDetails = (productDetails: ICartItemResponse) => {
    const taxValue = productDetails.tax / productDetails.productInfo.qty;

    const productInfo = {
      ...productDetails.productInfo,
      qty: 1,
    };

    return {
      productInfo,
      quantity: 1,
      subTotal: 1 * productDetails.productInfo.price,
      actualPrice: 1 * productDetails.productInfo.originalPrice,
      deduction: 0,
      tax: productDetails.tax ? taxValue : productDetails.tax,
    };
  };

  const findItem = (item: ICartItemResponse) => {
    return viewCart.cartItem.find(function (o) {
      return (
        o.productInfo.productCode === item.productInfo.productCode &&
        o.productInfo.size === item.productInfo.size
      );
    });
  };

  const AddItemToCart = (item: ICartItemResponse) => {
    const selectedItem = findItem(item);
    if (selectedItem) {
      const selectedProduct = getProductDetails(selectedItem);
      updateLocalCart(selectedProduct);
    }
  };

  const RemoveItemFromCart = (item: ICartItemResponse) => {
    RemoveItem(item.productInfo.productCode, item.productInfo.size);
  };

  const handleDeleteItem = async (mcid: number, size: string) => {
    DeleteItem(mcid, size);
    window.location.reload();
  };

  const handleDeleteAll = async () => {
    localStorage.removeItem("cartItems");
    window.location.reload();
  };

  // Notes

  let value = localStorage.getItem("note");

  const [note, setNote] = useState(value ? value : "");

  const handleSaveNote = (e: any) => {
    e.preventDefault();
  };

  const onSaveChange = (e: any) => {
    e.preventDefault();
    setNote(e.target.value);
  };

  const handleClearNote = (e: any) => {
    e.preventDefault();
    setNote("");
  };

  React.useEffect(() => {
    localStorage.setItem("note", note);
  }, [note]);

  const handleOnClickCheckOut = () => {
    navigate("/address");
  };

  //Add To WishList

  const FavIconOnclick = (id: number) => {
    if (LoggedInUser) {
      const item = {
        phone: LoggedInUser as string,
        pId: id,
      };

      dispatch(AddFavItem(item));
    } else {
      toast.info("Login");
    }
  };

  return {
    reduxtCartState,
    FetchCartData,
    viewCart,
    handleDeleteItem,
    handleDeleteAll,
    handleSaveNote,
    handleClearNote,
    note,
    onSaveChange,
    AddItemToCart,
    handleOnClickCheckOut,
    FavIconOnclick,
    isAddedToCart,
    productCodes,
    result,
    RemoveItemFromCart,
    updatedProduct,
  };
};
