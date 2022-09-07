import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import Spinner from "../../common/Spinner/Spinner";
import { useNav } from "../../header/useNav.hook";
import { fetchShopbyProducts } from "../../stateContainers/ProductListState/ThunkAction";
import { IShopbyProducts } from "../../stateContainers/ProductListState/Types";
import ShopbyPdtsBg from "../../../assets/image/collections/ShopbyPdtsBg.svg";

export const ShopByProducts = () => {
  const { productListData } = useSelector((state: IRootState) => state);
  const { data: products, loading } =
    productListData && productListData.shopbyproducts;
  const { MenuItemHandleClick } = useNav();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!products) {
      dispatch(fetchShopbyProducts());
    }
  }, [dispatch, products]);

  console.log(products);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="ShopBy__Container">
      <img src={ShopbyPdtsBg} alt="bg" className="PageHeaderWithBackground" />
      <div
        className=" ProductList--grid ProductList--removeMargin Grid"
        data-mobile-count="1"
        data-desktop-count="4"
      >
        {products &&
          products.map((product: IShopbyProducts) => {
            return (
              <div
                className="Grid__Cell 1/1--phone 1/4--desk 1/3--tablet-and-up"
                key={product.id}
              >
                <div
                  className="ProductItem "
                  onClick={() =>
                    MenuItemHandleClick("ShopbyProducts", product.name)
                  }
                >
                  <div className="AspectRatio AspectRatio--square Product__Image">
                    <img src={product.url} alt={product.name} />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
