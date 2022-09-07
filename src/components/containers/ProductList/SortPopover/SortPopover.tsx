import useProductList from "../useProductList.hook";
import { Body } from "./Body/Body";
import { Header } from "./Header/Header";
import "./SortPopover.scss";

export const SortPopover = () => {
  const { isSortEnabled } = useProductList();
  return (
    <div
      id="sort-popover"
      className="sort-popover"
      aria-hidden={!isSortEnabled}
    >
      <Header />
      <Body />
    </div>
  );
};
