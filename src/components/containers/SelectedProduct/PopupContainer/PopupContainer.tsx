import React from "react";
import { onClick } from "../../../../constant/Types";
import { CloseIcon } from "../../../common/Icons";
import { ModalEnum } from "../../../stateContainers/SelectedProduct/Types";
import { useSelProduct } from "../useSelProduct.hook";
import "./PopupContainer.scss";

export const PopupContainer = () => {
  const { modalHandleClick, modalVisibility, productDetails } = useSelProduct();
  const headerName = modalVisibility === ModalEnum.Size ? "Size Chart" : "Demo";

  return (
    <div className="modal template-detail">
      <div className="modal-wrapper">
        <div className="template-detail-wrapper">
          <div className="container">
            <div className="modal-header">
              <h2 className="title u-h2">{headerName}</h2>
              <button
                onClick={(e: onClick) => {
                  modalHandleClick(e, ModalEnum.Empty);
                }}
              >
                <CloseIcon classname="close-wp" />
              </button>
            </div>
            <div className="modal-content">
              <div className="modal-template-area">
                <div className="form-all">
                  <img
                    src={productDetails?.sizechart}
                    alt={productDetails?.productname}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
