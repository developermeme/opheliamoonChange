import React from "react";
import { useSelector } from "react-redux";
import ImageList from "./ImageList";
import { useWishList } from "./useWishList.hook";
import Spinner from "../../common/Spinner/Spinner";
import { IProduct } from "../../../model/IProductType";
import EmptyWishList from "./EmptyWishList/EmptyWishList";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import { isEmpty } from "../../common/ArrayFunctions";
import "./WishList.scss";

export const WishList = () => {
  const { favItems } = useWishList();
  const { spinnerData } = useSelector((state: IRootState) => state);
  const isLoading = spinnerData && spinnerData.isLoading;

  const WishListView = () => {
    return (
      <div className="wishListContainer">
        <div className="CollectionMain">
          <div className="CollectionInner">
            <div className="CollectionInner__Products">
              <div className="ProductListWrapper">
                <div
                  className="ProductList ProductList--grid ProductList--removeMargin Grid FavList"
                  data-mobile-count="1"
                  data-desktop-count="4"
                >
                  {favItems?.map((item: IProduct, index: number) => {
                    const isEmptyItem = isEmpty(item);
                    if (isEmptyItem) return true;
                    return (
                      <React.Fragment key={index}>
                        <ImageList item={item} />
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section>
      {isLoading ? (
        <Spinner />
      ) : favItems.length > 0 ? (
        <WishListView />
      ) : (
        <EmptyWishList />
      )}
    </section>
  );
};

export default WishList;
