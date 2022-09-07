import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { removeChar } from "../../common/Script";
import { useNav } from "../../header/useNav.hook";
import { SORT } from "../../../constant/Variables";
import { IProduct } from "../../../model/IProductType";
import { filterItems } from "../../common/ArrayFunctions";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import { fetchAllProducts } from "../../stateContainers/NavState/ThunkActions";
import { ICategory, ISubCategory } from "../../stateContainers/NavState/Types";
import { ProductListSlice } from "../../stateContainers/ProductListState/Slice";
import { SelectedProductSlice } from "../../stateContainers/SelectedProduct/Slice";

export interface IView {
  mobile: string;
  desktop: string;
}

export default function useProductList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { MenuItemHandleClick } = useNav();

  // Values From Redux
  const { navData } = useSelector((state: IRootState) => state);
  const productList = (navData && navData.allProducts.data) || [];
  const categories = navData && navData.categories;
  const homeProducts = navData && navData.homeProducts;
  const isLoading = navData && navData.allProducts.loading;
  const featureProducts = navData && navData.featureProduct;

  const {
    name: selectedCategory,
    subname: selectedId,
    childname: selectedChild,
  } = useParams() as any;

  const { productListData } = useSelector((state: IRootState) => state);
  const gridView = productListData && productListData.gridView;
  const sortedList = productListData && productListData.sortedList;

  const GetAlphabeticalOrderList = (): IProduct[] => {
    return [...productList].sort((a: IProduct, b: IProduct) =>
      a.productname.localeCompare(b.productname)
    );
  };

  const GetPriceOrderList = (): IProduct[] => {
    return [...productList].sort(
      (a: IProduct, b: IProduct) =>
        a.productSize[0].price - b.productSize[0].price
    );
  };

  // Sort Handler
  const isSortEnabled = productListData && productListData.isSortEnabled;

  const handleSortIconClick = () => {
    dispatch(ProductListSlice.actions.setSortVisibility(!isSortEnabled));
  };

  const handleSort = (item: string) => {
    let list;
    switch (item) {
      case SORT.AlPHABET: {
        list = GetAlphabeticalOrderList();
        break;
      }
      case SORT.REVERSEALPHABET: {
        list = GetAlphabeticalOrderList().reverse();
        break;
      }
      case SORT.HIGHTOLOW: {
        list = GetPriceOrderList().reverse();
        break;
      }
      case SORT.LOWTOHIGH: {
        list = GetPriceOrderList();
        break;
      }
      default:
        list = productList;
        break;
    }
    dispatch(ProductListSlice.actions.setSortedList(list));
    // setTimeout(() => {
    //   handleSortIconClick();
    // }, 1000);
  };

  const selectedCategoryItems = () => {
    const item = categories.find((item: ICategory) => {
      return item.mainCatName === selectedCategory;
    });
    return item;
  };

  // Filters
  const getFilters = () => {
    let subList;
    if (selectedCategory === "SHOP") {
      subList = categories.map((x: ICategory) => x.mainCatName);
    } else {
      const item = selectedCategoryItems();
      subList = item?.categories.map((item: ISubCategory) => item.cName);
    }
    return subList;
  };

  //Toggle Filter Inner
  const filterInnerEnabled =
    productListData && productListData.toggleFilterInner;

  const toggleFilterClick = () => {
    dispatch(
      ProductListSlice.actions.settoggleFilterInner(!filterInnerEnabled)
    );
  };

  // Filter List Selector
  const handleSelectedItemClick = (id?: string) => {
    if (isRightViewEnabled) {
      handleRightViewVisibility();
    }
    if (selectedId === id || !id) {
      MenuItemHandleClick(selectedCategory);
    } else {
      MenuItemHandleClick(selectedCategory, id);
    }
  };

  const MenuApplyHandleClick = () => {
    let mtName;

    if (selectedCategory === "SHOP") {
      const mCategory = categories?.find(
        (item: any, index: number) => index === selectedId
      );

      mtName = {
        mt: mCategory?.mainCatName,
      };
    } else {
      const subCategory = getFilters();
      const sCategory = subCategory?.find(
        (item: any, index: number) => index === selectedId
      );
      mtName = {
        mt: selectedCategory,
        st: sCategory,
      };
    }

    dispatch(fetchAllProducts(mtName));

    if (isRightViewEnabled) {
      handleRightViewVisibility();
    }
  };

  //Right View Filter List Selector
  const isRightViewEnabled =
    productListData && productListData.isRightviewEnabled;

  const handleRightViewVisibility = () => {
    dispatch(
      ProductListSlice.actions.setRightFilterVisibility(!isRightViewEnabled)
    );
  };

  // Grid View Controller
  const handleGridView = (view: IView) => {
    dispatch(ProductListSlice.actions.setgridView(view));
  };

  const getActiveGridView = (view: IView) => {
    const activeClass =
      gridView === view ? "layout-type is-active" : "layout-type";
    return activeClass;
  };

  const getFilteredProductList = (parameter: string) => {
    let filteredList: IProduct[] = [];
    switch (parameter) {
      case "NEW THIS WEEK":
        filteredList = filterItems(homeProducts, {
          pntw: "TWNA",
        });
        break;
      case "HOT":
        filteredList = filterItems(homeProducts, {
          fabric: "hot",
        });
        break;
      case "ShopbyProducts":
        filteredList = filterItems(homeProducts, {
          shopbyproducts: selectedId,
        });
        break;
      case "Collection":
        filteredList = filterItems(homeProducts, {
          descpription1: selectedId,
        });
        break;
      default:
        let filters: any = {
          maincategory: selectedCategory,
          subcategory: selectedId,
          subcategory1: selectedChild,
        };

        filteredList = filterItems(homeProducts, filters);
    }

    return filteredList;
  };

  // Image OnClick
  const handleProductOnclick = (item: IProduct) => {
    const selectedProduct = {
      from: "list",
      productDetails: item,
    };
    dispatch(SelectedProductSlice.actions.setSelectedProduct(selectedProduct));
    localStorage.setItem("selected-product", JSON.stringify(selectedProduct));
    const str = removeChar(item.productname);
    const url = `/info/${str}/${item.mcId}`;
    navigate(url);
  };

  return {
    gridView,
    isLoading,
    categories,
    sortedList,
    selectedId,
    productList,
    homeProducts,
    isSortEnabled,
    selectedChild,
    featureProducts,
    selectedCategory,
    isRightViewEnabled,
    filterInnerEnabled,
    handleSort,
    getFilters,
    handleGridView,
    getActiveGridView,
    toggleFilterClick,
    handleSortIconClick,
    handleProductOnclick,
    MenuApplyHandleClick,
    selectedCategoryItems,
    handleSelectedItemClick,
    handleRightViewVisibility,
    getFilteredProductList,
  };
}
