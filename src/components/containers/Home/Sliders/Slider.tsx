import React, { useEffect, useState } from "react";
import { Carousel } from "./Carousel/Carousel";
import { useNav } from "../../../header/useNav.hook";
import { IProduct } from "../../../../model/IProductType";
import useProductList from "../../ProductList/useProductList.hook";

export const Slider = () => {
  const { MenuItemHandleClick } = useNav();
  const { getFilteredProductList, homeProducts } = useProductList();

  const [thisWeekProducts, setThisWeekProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const products: IProduct[] = getFilteredProductList("NEW THIS WEEK");

    if (products.length) {
      setThisWeekProducts(products);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [homeProducts]);

  return (
    <React.Fragment>
      {thisWeekProducts && (
        <Carousel
          Sliderimages={thisWeekProducts}
          buttonName="View all products"
          hanleViewAllProducts={() => {
            MenuItemHandleClick("SHOP");
          }}
        />
      )}
    </React.Fragment>
  );
};
