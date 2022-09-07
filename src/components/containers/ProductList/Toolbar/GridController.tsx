import React from "react";
import { view1, view2 } from "../../../../constant/Variables";
import { DualView, MultiView, SingleView } from "../../../common/Icons";

import useProductList from "../useProductList.hook";

export const useGridView = () => {
  const [state, setState] = React.useState(view1);

  const handleGridView = (view: any) => {
    setState(view);
  };

  const getClassName = (view: any) => {
    const activeClass =
      state === view ? "layout-type is-active" : "layout-type";

    return activeClass;
  };

  return { handleGridView, getClassName };
};

export default function ProductGallery() {
  return (
    <div className="CollectionInner">
      <div className="CollectionInner__Products">
        <div className="ProductListWrapper">
          <div
            className="ProductList ProductList--grid ProductList--removeMargin Grid"
            data-mobile-count="2"
            data-desktop-count="4"
          ></div>
        </div>
      </div>
    </div>
  );
}

const MobileView = () => {
  const { handleGridView, getActiveGridView } = useProductList();
  return (
    <div className="grid-Layout__mobile">
      <button
        aria-label="one * one view"
        className={getActiveGridView(view1)}
        onClick={() => handleGridView(view1)}
      >
        <SingleView />
      </button>
      <button
        aria-label="two * two view"
        // className="layout-type"
        className={getActiveGridView(view2)}
        onClick={() => handleGridView(view2)}
      >
        <DualView />
      </button>
    </div>
  );
};

const DesktopView = () => {
  const { handleGridView, getActiveGridView } = useProductList();

  return (
    <div className="grid-Layout__desktop">
      <button
        aria-label="two * two view"
        // className="layout-type"
        className={getActiveGridView(view1)}
        onClick={() => handleGridView(view1)}
      >
        <DualView />
      </button>
      <button
        aria-label="four * four view"
        // className="layout-type is-active"
        className={getActiveGridView(view2)}
        onClick={() => handleGridView(view2)}
      >
        <MultiView />
      </button>
    </div>
  );
};

export const GridController = () => {
  return (
    <div className="toolbar__item  grid-layout">
      <MobileView />
      <DesktopView />
    </div>
  );
};
