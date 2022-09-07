import React from "react";
import { Reviews } from "../../Reviews/Reviews";
import { Accordian } from "../../../ui-kit/Accordian/Accordian";
import { ProductDescription } from "../DeliveryDetails/ProductDescription";

import "./AccordianGroup.scss";
import { useSelProduct } from "../useSelProduct.hook";

export const AccordianGroup = () => {
  const { selectedProduct } = useSelProduct();

  const reviews = selectedProduct?.productDetails?.reviews;
  const reviewLength = reviews?.length || 0;
  const reviewTitle = `Customer Reviews ( ${reviewLength} )`;

  return (
    <div className="AccordianGroup">
      <Accordian title="Delivery Details" child={<ProductDescription />} />
      <Accordian title={reviewTitle} child={<Reviews />} />
    </div>
  );
};
