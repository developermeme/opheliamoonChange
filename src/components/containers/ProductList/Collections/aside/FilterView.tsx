import React from "react";

import { FilterBody } from "./FilterBody";
import "./FilterView.scss";

export const FilterView = () => {
  return (
    <div
      className="CollectionInner__Sidebar  hidden-pocket"
      style={{ top: "50px" }}
    >
      <FilterBody />
    </div>
  );
};
