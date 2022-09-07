import React from "react";
import { IProduct } from "../../../../model/IProductType";
import { Carousel } from "../../Home/Sliders/Carousel/Carousel";
import useProductList from "../useProductList.hook";

export default function FeatureProducts() {
  const { featureProducts } = useProductList();

  const items = featureProducts?.slice(0, 6) || [];

  return (
    <React.Fragment>
      {items?.length && (
        <Carousel
          header="Featured Products"
          Sliderimages={items as IProduct[]}
        />
      )}
    </React.Fragment>
  );
}
