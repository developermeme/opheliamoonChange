import React from "react";
import FilterContent from "./FilterContent";
import FilterHeader from "./FilterHeader";
import "./FilterDrawer.scss";

function FilterDrawer() {
  return (
    <div className="f-drawer hidden-lap-and-up">
      <div className="f-wrapper">
        <FilterHeader />
        <FilterContent />
      </div>
    </div>
  );
}

export default FilterDrawer;
