import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { onClick } from "../../../constant/Types";
import {
  IProduct,
  IProductImage,
  IProductSize,
} from "../../../model/IProductType";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import {
  dateInPast,
  getProductDetails,
  LoggedInUser,
  updateLocalCart,
} from "../../common/Script";
import { SelectedProductSlice } from "../../stateContainers/SelectedProduct/Slice";
import {
  ISelectedProduct,
  ModalEnum,
} from "../../stateContainers/SelectedProduct/Types";
import { AddFavItem } from "../../stateContainers/WishList/ThunkActions";
import { useWishList } from "../WishList/useWishList.hook";

export const useSelProduct = () => {
  const { selectedProductData } = useSelector((state: IRootState) => state);
  const Dispatch = useDispatch();
  const { favItems } = useWishList();

  const selectedData =
    selectedProductData && selectedProductData.selectedProduct;

  const deliveryStatus =
    selectedProductData && selectedProductData.deliveryStatus;

  const productItem = selectedProductData && selectedProductData.productItem;

  const selectedPdt = JSON.parse(
    localStorage.getItem("selected-product") as any
  );

  // Selected Product
  const selectedProduct: ISelectedProduct = selectedPdt;
  const productDetails = selectedProduct?.productDetails;
  const updatedProduct =
    selectedProductData && selectedProductData.updatedProduct;

  const date = selectedProduct?.productDetails?.date;
  const endDate = new Date(date);
  const today = new Date();

  const isPastDate = dateInPast(endDate, today);

  const isFavProduct =
    favItems &&
    favItems.find(
      (item: IProduct) => item?.mcId === selectedProduct?.productDetails?.mcId
    );

  //Fav Product
  const FavIconOnclick = (e: onClick) => {
    e.preventDefault();
    const item = {
      phone: LoggedInUser as string,
      pId: productDetails.mcId,
    };
    if (LoggedInUser !== null) {
      Dispatch(AddFavItem(item));
    } else {
      toast("Login");
    }
  };

  //Images
  const images = productDetails?.productImages;
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [activeImage, setActiveImage] = React.useState("");

  const handleDotsClick = (index: number) => {
    setActiveIndex(index);
  };

  const selectedImageUrl = () => {
    const image = images.find(
      (item: IProductImage, index: number) => index === activeIndex
    );
    setActiveImage(image?.imageUrl as string);
  };

  const [length, setLength] = useState(images?.length);

  React.useEffect(() => {
    setLength(images?.length);
  }, [images]);

  const next = () => {
    if (activeIndex < length - 1) {
      setActiveIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevState) => prevState - 1);
    }
  };

  // Cart Button
  let buttonName: any = "";
  buttonName = isPastDate !== null && !isPastDate ? "Pre Order" : "Add To Cart";

  // Fav Button
  const FavIconName =
    isFavProduct !== undefined ? "In WishList" : "Add To WishList";

  const [disableFav, setDisableFav] = React.useState(false);

  React.useEffect(() => {
    if (isFavProduct !== undefined) {
      setDisableFav(true);
    } else {
      setDisableFav(false);
    }
  }, [isFavProduct]);

  const initialState = {
    count: 1,
    size:
      productDetails?.productSize?.length > 0
        ? productDetails?.productSize[0].psize
        : "",
    color: "",
  };

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return {
          ...state,
          count: state.count > 1 ? state.count - 1 : state.count,
        };
      case "color":
        return {
          ...state,
          color: action.payload,
        };
      case "size":
        return {
          ...state,
          size: action.payload,
        };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  let count = state.count;
  let size = state.size;

  const priceAmount = productDetails?.productSize?.find(
    (item: IProductSize) => item.psize === size || 0
  );

  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };

  const handleSizeChange = (size: string) => {
    dispatch({ type: "size", payload: size });
  };

  const handleColorChange = (color: string) => {
    dispatch({ type: "color", payload: color });
  };

  React.useEffect(() => {
    let updatedPreOrderedItem = { ...updatedProduct };
    updatedPreOrderedItem = {
      productId: selectedProduct?.productDetails?.mcId as number,
      qty: state.count,
      cusId: LoggedInUser as string,
      size: state.size,
      price: priceAmount?.price as number,
    };

    Dispatch(
      SelectedProductSlice.actions.setUpdatedProduct(updatedPreOrderedItem)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  // Popup SizeChart
  const modalVisibility =
    selectedProductData && selectedProductData.selectedModal;
  const modalHandleClick = (e: onClick, value: ModalEnum) => {
    e.preventDefault();
    Dispatch(SelectedProductSlice.actions.setSelectedModal(value));
  };

  const handleButtonClick = () => {
    const selectedProduct = getProductDetails(productDetails, updatedProduct);
    updateLocalCart(selectedProduct);
    toast.success("Product successfully added to cart");
  };

  return {
    selectedProduct,
    selectedData,
    productDetails,
    count,
    handleIncrement,
    handleDecrement,
    images,
    activeIndex,
    activeImage,
    selectedImageUrl,
    handleDotsClick,
    buttonName,
    size,
    handleSizeChange,
    handleColorChange,
    handleButtonClick,
    FavIconOnclick,
    FavIconName,
    disableFav,
    next,
    prev,
    modalHandleClick,
    modalVisibility,
    updatedProduct,
    productItem,
    deliveryStatus,
    isPastDate,
  };
};
