import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ICategory,
  IChildCategory1,
  ISubCategory,
} from "../stateContainers/NavState/Types";
import { IRootState } from "../../redux/reducer/CombineReducer";
import { useNavInfoContext } from "../../react-context/NavContext";

export type productType = {
  mCategory: string;
  sCategory: string[];
  indexValue?: number;
  open?: boolean;
};

export const useNav = () => {
  const navigate = useNavigate();
  const { navData } = useSelector((state: IRootState) => state);
  const categories = navData && navData.categories;
  const homePdt = navData && navData.homeProducts;

  const { isVisibleMenu, MenuIconClick } = useNavInfoContext();

  const getOrderValues = (items: ICategory[]) => {
    return items?.map((item: ICategory, index: number) => {
      return {
        title: item.mainCatName,
        catType: "mt",
        submenu: item?.categories?.map((subItem: ISubCategory) => {
          return {
            title: subItem.cName,
            catType: "st",
            mt: item.mainCatName,
            submenu: subItem?.subcategories?.map((child1: IChildCategory1) => {
              return {
                title: child1.cName,
                mt: item.mainCatName,
                st: subItem.cName,
                catType: "sc",
              };
            }),
          };
        }),
      };
    });
  };

  const handleNavItemClick = (items: any) => {};

  const MenuItemHandleClick = (
    mCategory?: string,
    subCategory?: string,
    subCategory1?: string
  ) => {
    if (isVisibleMenu) {
      MenuIconClick();
    }

    let url = `/list/${mCategory}`;

    if (mCategory && mCategory === "SHOP BY") {
      url = `/shopby`;
    }

    if (subCategory) {
      url += `/${subCategory}`;
    }

    if (subCategory1) {
      url += `/${subCategory1}`;
    }

    navigate(url);
  };

  const ShopbyHandler = (field: string) => {
    if (isVisibleMenu) {
      MenuIconClick();
    }
    let url = `/shopby/${field}`;
    navigate(url);
  };

  return {
    homePdt,
    categories,
    getOrderValues,
    ShopbyHandler,
    MenuItemHandleClick,
    handleNavItemClick,
  };
};
