import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Title } from "./TitleBar/Title";
import { Toolbar } from "./Toolbar/Toolbar";
import Spinner from "../../common/Spinner/Spinner";
import useProductList from "./useProductList.hook";
import { Collections } from "./Collections/Collections";
import { SortPopover } from "./SortPopover/SortPopover";
import { filterItems } from "../../common/ArrayFunctions";
import FeatureProducts from "./FeatureProducts/FeatureProducts";
import FilterDrawer from "./Collections/FilterDrawer/FilterDrawer";
import {
  getAllProducts,
  getFeatureProducts,
} from "../../stateContainers/NavState/Slice";
import { asyncDataInitialState } from "../../../constant/Types";
import { fetchHomePdts } from "../../stateContainers/NavState/ThunkActions";
import "./ProductList.scss";

export const ProductList = () => {
  const {
    isLoading,
    selectedId,
    productList,
    homeProducts,
    isSortEnabled,
    isRightViewEnabled,
    selectedChild,
    selectedCategory: category,
    getFilteredProductList,
  } = useProductList();

  const dispatch = useDispatch();

  useEffect(() => {
    if (homeProducts.length) {
      const filteredList = getFilteredProductList(category);
      console.log(filteredList);
      const allProducts = {
        ...asyncDataInitialState,
        data: filteredList,
      };
      dispatch(getAllProducts(allProducts));
    } else {
      dispatch(fetchHomePdts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, homeProducts, selectedId, selectedChild]);

  useEffect(() => {
    let featureProducts = filterItems(homeProducts, {
      maincategory: category,
    });
    featureProducts = featureProducts
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);
    dispatch(getFeatureProducts(featureProducts));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, homeProducts]);

  const ListView = (
    <>
      <section
        data-section-id="collection-template"
        data-section-type="collection"
        className="container__main"
      >
        <Title />
        <Toolbar />
        {isRightViewEnabled && <FilterDrawer />}
        {isSortEnabled && <SortPopover />}
        <Collections />
      </section>
      <FeatureProducts />
    </>
  );

  return (
    <React.Fragment>
      {isLoading ? <Spinner /> : !isLoading && productList ? ListView : null}
    </React.Fragment>
  );
};

export default ProductList;
