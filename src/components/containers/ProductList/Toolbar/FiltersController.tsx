import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import useProductList from "../useProductList.hook";

export const FiltersController = () => {
  const { isSortEnabled, handleSortIconClick, handleRightViewVisibility } =
    useProductList();

  const getIcons = isSortEnabled ? (
    <ExpandLessIcon className="icon icon-select-arrow" />
  ) : (
    <ExpandMoreIcon className="icon icon-select-arrow" />
  );

  return (
    <div className="filters-group">
      <button
        className="toolbar__item filters-group__filter u-h4 hidden-lap-and-up"
        onClick={handleRightViewVisibility}
      >
        Filter
      </button>
      <button
        className="toolbar__item filters-group__sort u-h4"
        onClick={handleSortIconClick}
      >
        Sort {getIcons}
      </button>
    </div>
  );
};
