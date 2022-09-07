import { useSelector } from "react-redux";
import { IProduct } from "../../../../../model/IProductType";
import { IRootState } from "../../../../../redux/reducer/CombineReducer";
import { useNav } from "../../../../header/useNav.hook";
import { TextButton } from "../../../../ui-kit/TextButton/TextButton.view";
import { ImageView } from "../../../ProductList/Collections/main/ImageView";
import useProductList from "../../../ProductList/useProductList.hook";
import "./HomePdtList.scss";

function HomePdtList() {
  const { navData } = useSelector((state: IRootState) => state);
  const homePdt = navData && navData.homeProducts;

  const slicedHomePdtArray = homePdt.length > 8 ? homePdt.slice(0, 8) : homePdt;

  const { handleProductOnclick } = useProductList();
  const { MenuItemHandleClick } = useNav();

  const ImageList = () => {
    return (
      <div className="ProductListWrapper">
        <div className="ProductList ProductList--grid ProductList--removeMargin Grid">
          {slicedHomePdtArray &&
            slicedHomePdtArray?.map((item: IProduct) => {
              return (
                <ImageView
                  key={item.mcId}
                  gridName="Grid__Cell 1/2--phone 1/2--tablet 1/4--lap-and-up"
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
            })}
        </div>
      </div>
    );
  };

  return (
    <div className="shopify-section shopify-section--bordered">
      <section className="Section Section--spacingNormal">
        <div className="TabPanel">
          <ImageList />
          <div className="Container">
            <div className="SectionFooter">
              <TextButton
                isprimary={true}
                onClick={() => {
                  MenuItemHandleClick("SHOP");
                }}
                items="View All Products"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePdtList;
