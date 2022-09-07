import React from "react";
import { onClick } from "../../../../../constant/Types";
import useProductList from "../../useProductList.hook";

function FilterHeader() {
  const { handleSelectedItemClick } = useProductList();

  const ResetonClickHandler = (e: onClick) => {
    e.preventDefault();
    handleSelectedItemClick();
  };

  return (
    <div className="f-header">
      <p className="f-title">Filters</p>
      <button className="f-clear-all" onClick={ResetonClickHandler}>
        Reset filters
      </button>
    </div>
  );
}

export default FilterHeader;
