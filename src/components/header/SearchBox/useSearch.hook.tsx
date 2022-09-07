import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { onChange, onClick } from "../../../constant/Types";
import { useNavInfoContext } from "../../../react-context/NavContext";
import { IRootState } from "../../../redux/reducer/CombineReducer";

function useSearch() {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const { searchToggleClick, isVisibleSearch } = useNavInfoContext();

  const { navData } = useSelector((state: IRootState) => state);
  const searchList = navData && navData.searchList;
  const searchTerm = navData && navData.searchValue;

  const navigate = useNavigate();

  const handleChange = (e: onChange) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const onSearchSubmit = (e: onClick) => {
    e.preventDefault();
    if (searchValue.length > 1) {
      navigate(`/search?searchText=${searchValue}`);
      if (isVisibleSearch) {
        searchToggleClick();
      }
    } else {
      toast.info("Your search value should contain more than 2 letters");
    }
  };

  return {
    searchValue,
    handleChange,
    onSearchSubmit,
    searchList,
    searchTerm,
  };
}

export default useSearch;
