import React from "react";
import useProductList from "../useProductList.hook";
import "./Title.scss";

export const Title = () => {
  const {
    selectedId,
    selectedCategory: category,
    selectedChild,
  } = useProductList();
  const header = category || "Shop";

  return (
    <header className="list-header">
      <div className="list-container">
        <div className="list-container__wrapper">
          <h1 className="u-h5">
            {header}
            {selectedId && <span> / {selectedId}</span>}
            {selectedChild && <span> / {selectedChild}</span>}
          </h1>
        </div>
      </div>
    </header>
  );
};
