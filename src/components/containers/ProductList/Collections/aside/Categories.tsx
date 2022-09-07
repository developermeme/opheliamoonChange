import React from "react";
import useProductList from "../../useProductList.hook";

function Categories() {
  const { selectedId, handleSelectedItemClick, getFilters } = useProductList();

  return (
    <div className="fs-rdo-inner u-h5">
      {getFilters()?.map((item: any, index) => {
        const activeRdo = selectedId === item ? "fs-radio-checked" : "";

        return (
          <div
            className="fs-rdo-wrapper"
            onClick={() => handleSelectedItemClick(item)}
            key={index}
          >
            <div className="fs-rdo-name">{item}</div>
            <div className={`fs-radio ${activeRdo} `}></div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
