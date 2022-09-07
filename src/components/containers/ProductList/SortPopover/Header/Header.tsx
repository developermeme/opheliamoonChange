import React from "react";
import { CloseIcon } from "../../../../common/Icons";
import useProductList from "../../useProductList.hook";
import "./Header.scss";

export const Header = () => {
  const { handleSortIconClick } = useProductList();
  return (
    <header className="popover-head">
      <span className="popover-title u-h3">Sort</span>
      <button
        className="popover-close-button"
        data-action="close-popover"
        onClick={handleSortIconClick}
      >
        <CloseIcon />
      </button>
    </header>
  );
};
