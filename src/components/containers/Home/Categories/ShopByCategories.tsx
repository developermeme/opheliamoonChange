import { useNav } from "../../../header/useNav.hook";
import { ICategory } from "../../../stateContainers/NavState/Types";

export const ShopByCategories = () => {
  const { categories, MenuItemHandleClick } = useNav();

  return (
    <div
      className=" ProductList--grid ProductList--removeMargin Grid"
      data-mobile-count="1"
      data-desktop-count="3"
    >
      {categories?.map((item: ICategory) => {
        return (
          <div className="Grid__Cell" key={item.id}>
            <div
              className="ProductItem "
              onClick={() => {
                MenuItemHandleClick(item.mainCatName);
              }}
            >
              <img
                className="Product__Image"
                src={item.imageUrl}
                alt={item.mainCatName}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
