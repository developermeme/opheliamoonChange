import React from "react";
import {
  gridViewOne,
  gridViewTwo,
  view1,
  view2,
} from "../../../../../constant/Variables";
import { useWindowSize } from "../../../../../hook/useWindowSize.hook";
import { IProduct } from "../../../../../model/IProductType";
import useProductList from "../../useProductList.hook";
import { ImageView } from "./ImageView";

export const ListView = () => {
  const [width] = useWindowSize();

  const { handleProductOnclick, sortedList } = useProductList();

  let initialState = {
    mobileCount: "",
    desktopCount: "",
    GridName: "",
    maxWidth: "",
    aspectRatio: "",
  };

  const [state, setState] = React.useState(initialState);

  const { gridView } = useProductList();

  const setView = (gridViewOne: any[]) => {
    if (width > 1024) {
      setState(gridViewOne[0]);
    }
    if (width > 641) {
      setState(gridViewOne[1]);
    }
    if (width < 641) {
      setState(gridViewOne[2]);
    }
  };

  React.useEffect(() => {
    if (gridView === view1) setView(gridViewOne);
    if (gridView === view2) setView(gridViewTwo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, gridView]);

  const imageView = () => {
    return [...sortedList]?.reverse().map((item: IProduct, index: number) => {
      let productView = (
        <ImageView
          key={item.mcId}
          gridName={state.GridName}
          url={
            item.imageurl ||
            (item.productImages && item.productImages[0]?.imageUrl)
          }
          name={item.productname}
          price={item.productSize[0]?.price || 0}
          offer={item.offer}
          item={item}
          endDate={item.date}
          handleProductOnclick={handleProductOnclick}
        />
      );
      return productView;
    });
  };

  return (
    <div className="CollectionInner__Products" style={{ width: "100%" }}>
      <div className="ProductListWrapper">
        <div
          className="ProductList ProductList--grid ProductList--removeMargin Grid"
          data-mobile-count={state.mobileCount}
          data-desktop-count={state.desktopCount}
        >
          {imageView()}
        </div>
      </div>
    </div>
  );
};
