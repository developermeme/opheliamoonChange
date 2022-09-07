import React from "react";
import { Banner } from "./Banner/Banner";
import { Slider } from "./Sliders/Slider";
import Spinner from "../../common/Spinner/Spinner";
import { Categories } from "./Categories/Categories";
import useProductList from "../ProductList/useProductList.hook";
import { ShopByCollections } from "../ShopBy/ShopByCollections";
import "./Style.scss";

export const HomeView = () => {
  const { isLoading } = useProductList();

  return (
    <React.Fragment>
      <div></div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Banner />
          <Slider />
          <Categories title="ShopBy Categories" />
          <Categories>
            <ShopByCollections />
          </Categories>
        </>
      )}
    </React.Fragment>
  );
};

export default HomeView;
