import { useNav } from "../../header/useNav.hook";
import { CollectionData, ICollectionData } from "./CollectionData";

import CollectionBg from "../../../assets/image/collections/CollectionBg.svg";

export const ShopByCollections = () => {
  const { MenuItemHandleClick } = useNav();
  return (
    <div className="ShopBy__Container">
      <img src={CollectionBg} alt="bg" className="PageHeaderWithBackground" />
      <div
        className=" ProductList--grid ProductList--removeMargin Grid"
        data-mobile-count="1"
        data-desktop-count="3"
      >
        {CollectionData.map((Collection: ICollectionData) => (
          <div
            className="Grid__Cell 1/1--phone 1/3--desk 1/2--tablet-and-up"
            key={Collection.name}
          >
            <div
              className="ProductItem"
              onClick={() => MenuItemHandleClick("Collection", Collection.name)}
            >
              <div className="AspectRatio AspectRatio--tall Product__Image">
                <img src={Collection.image} alt={Collection.name} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
