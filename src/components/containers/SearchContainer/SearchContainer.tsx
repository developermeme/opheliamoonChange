import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchList from "./SearchList/SearchList";
import { useQuery } from "../../../hook/useQuery";
import Spinner from "../../common/Spinner/Spinner";
import { IProduct } from "../../../model/IProductType";
import NoResultFound from "./NoResultsFound/NoResultFound";
import useSearch from "../../header/SearchBox/useSearch.hook";
import useProductList from "../ProductList/useProductList.hook";
import { IRootState } from "../../../redux/reducer/CombineReducer";
import { getSearchList } from "../../stateContainers/NavState/Slice";
import { genericSearch } from "../../common/ArrayFunctions";
import { fetchSearchProducts } from "../../stateContainers/NavState/ThunkActions";
import "./SearchContainer.scss";

export const SearchContainer = () => {
  const { searchList } = useSearch();
  const { spinnerData } = useSelector((state: IRootState) => state);
  const isLoading = spinnerData && spinnerData.isLoading;

  let query = useQuery();
  const searchText = query.get("searchText") || "";

  const { homeProducts } = useProductList();

  const dispatch = useDispatch();

  useEffect(() => {
    let filteredList: IProduct[] = [];

    if (homeProducts.length) {
      const searchTerm = searchText;
      filteredList = homeProducts?.filter((product: IProduct) =>
        genericSearch(product, ["maincategory", "subcategory"], searchTerm)
      );
      dispatch(getSearchList(filteredList));
    } else {
      dispatch(fetchSearchProducts(searchText));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, homeProducts]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : searchList.length > 0 ? (
        <SearchList />
      ) : (
        <NoResultFound />
      )}
    </div>
  );
};

export default SearchContainer;
