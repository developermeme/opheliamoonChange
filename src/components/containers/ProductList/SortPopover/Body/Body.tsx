import React from "react";
import { SORT } from "../../../../../constant/Variables";
import useProductList from "../../useProductList.hook";

import "./Body.scss";

export const Body = () => {
  const sortList = Object.values(SORT);

  const [activeId, setActiveId] = React.useState<null | number>(null);

  const { handleSort } = useProductList();

  const handleClick = (key: number, item: string) => {
    setActiveId(key);
    handleSort(item);
  };

  const renderSortList = () => {
    return sortList.map((item: string, index: number) => {
      const activebtn = activeId === index ? "i-selected" : "";
      const activeRadio = activeId === index ? "i-radio-selected" : "";
      return (
        <button
          className={`popover-list-btn ${activebtn} u-h5`}
          onClick={() => handleClick(index, item)}
          data-action="select-value"
          key={index}
        >
          <div className={`i-radio ${activeRadio}`}></div>
          {item}
        </button>
      );
    });
  };

  return (
    <div className="popover-body">
      <div className="popover-list" data-scrollable="">
        {renderSortList()}
      </div>
    </div>
  );
};

export default Body;
