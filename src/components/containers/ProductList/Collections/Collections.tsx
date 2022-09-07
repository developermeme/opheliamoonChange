import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ListView } from "./main/ListView";
import { FilterView } from "./aside/FilterView";
import useProductList from "../useProductList.hook";
import { IProduct } from "../../../../model/IProductType";
import EmptyProducts from "../../../common/EmptyProducts/EmptyProducts";
import { ProductListSlice } from "../../../stateContainers/ProductListState/Slice";
import "./Collections.scss";

export const Collections = () => {
  const { getFilters, sortedList, productList } = useProductList();

  const FilterList = getFilters() as string[];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductListSlice.actions.setSortedList(productList as IProduct[]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productList]);

  return (
    <div className="CollectionInner">
      {FilterList?.length > 0 && <FilterView />}
      {sortedList?.length > 0 ? <ListView /> : <EmptyProducts />}
    </div>
  );
};
