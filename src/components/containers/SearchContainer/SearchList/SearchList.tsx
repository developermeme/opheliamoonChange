import { IProduct } from "../../../../model/IProductType";
import useSearch from "../../../header/SearchBox/useSearch.hook";
import { ImageView } from "../../ProductList/Collections/main/ImageView";
import useProductList from "../../ProductList/useProductList.hook";

function SearchList() {
  const { searchList } = useSearch();

  const { handleProductOnclick } = useProductList();

  return (
    <>
      <header className="SearchPageHeader">
        <div className="Container">
          <div className="SectionHeader SectionHeader--center">
            <h1 className="WishListHeading u-h3">
              Search Results ( {searchList?.length} )
            </h1>
          </div>
        </div>
      </header>
      <div className="SearchCollectionInner">
        <div className="CollectionInner__Products">
          <div className="ProductListWrapper">
            <div
              className="ProductList ProductList--grid ProductList--removeMargin Grid"
              data-mobile-count="2"
              data-desktop-count="4"
            >
              {searchList.map((item: IProduct) => {
                return (
                  <ImageView
                    key={item.productname}
                    gridName="Grid__Cell 1/2--phone 1/2--tablet 1/4--lap-and-up"
                    url={item.imageurl}
                    name={item.productname}
                    price={item.productSize[0]?.price || 0}
                    offer={item.offer}
                    item={item}
                    handleProductOnclick={handleProductOnclick}
                    endDate={item.date}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchList;
