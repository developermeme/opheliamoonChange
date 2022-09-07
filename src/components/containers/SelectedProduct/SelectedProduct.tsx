import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../common/Spinner/Spinner";
import ProductInfo from "./ProductInfo/ProductInfo";
import { useSelProduct } from "./useSelProduct.hook";
import ProductGallery from "./ProductGallery/ProductGallery";
import { PopupContainer } from "./PopupContainer/PopupContainer";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import EmptyProducts from "../../common/EmptyProducts/EmptyProducts";
import { ModalEnum } from "../../stateContainers/SelectedProduct/Types";
import { getProduct } from "../../stateContainers/SelectedProduct/ThunkAction";
import "./SelectedProduct.scss";
import { AccordianGroup } from "./AccordianGroup/AccordianGroup";

export const SelectedProduct = () => {
  const { spinnerData } = useSelector((state: IRootState) => state);
  const isLoading = spinnerData && spinnerData.isLoading;
  const { selectedProduct, modalVisibility } = useSelProduct();

  const dispatch = useDispatch();
  const { id } = useParams() as any;
  localStorage.removeItem("selected-category");

  const mcid = selectedProduct?.productDetails?.mcId;
  const isEqualProductId = id.toString() === mcid?.toString();

  useEffect(() => {
    if (!isEqualProductId) {
      dispatch(getProduct({ pId: id }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {Object.entries(selectedProduct?.productDetails).length ? (
        <section className="Product">
          <div className="ProductDetails__Container">
            <ProductGallery />
            <ProductInfo />
          </div>
          <AccordianGroup />
          {modalVisibility !== ModalEnum.Empty && <PopupContainer />}
        </section>
      ) : (
        <EmptyProducts />
      )}
    </>
  );
};

export default SelectedProduct;
