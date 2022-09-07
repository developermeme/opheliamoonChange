import React from "react";
import "./SearchBox.scss";
import SearchIcon from "@material-ui/icons/Search";
import useSearch from "./useSearch.hook";


export const SearchBox = () => {
  const { searchValue, handleChange, onSearchSubmit } = useSearch();
  return (
    <form>
      <div className="searcBar">
        <div className="searchcontainer">
          <div className="searchBox" style={{ overflow: "hidden" }}>
            <div className="sform-group">
              <input
                type="text"
                id="searchInput"
                className="sform-control"
                placeholder="Search here"
                value={searchValue}
                onChange={handleChange}
              ></input>
            </div>
            <button
              type="submit"
              name="submit"
              className="sform-button"
              onClick={onSearchSubmit}
            >
              <span>
                <SearchIcon />
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
