import React from "react";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Categories from "./Categories";

export const FilterBody = () => {
  const [SelectedFilter, setSelectedFilter] = React.useState<boolean | null>(
    true
  );

  const onExpandClick = () => {
    setSelectedFilter(!SelectedFilter);
  };

  return (
    <div className="Filter-List">
      <div className="Filter-List-title u-h5" onClick={onExpandClick}>
        <span className="fs-name">CATEGORIES</span>
        <ExpandMore />
      </div>
      {SelectedFilter && <Categories />}
    </div>
  );
};
