import React from "react";
import "./NoResultFound.scss";
import SearchIcon from "@material-ui/icons/Search";
import useSearch from "../../../header/SearchBox/useSearch.hook";

export const NoResultFound = () => {
  const { searchTerm, searchValue, handleChange, onSearchSubmit } = useSearch();

  return (
    <div className="NoResultWrapper">
      <div className="NoResultContainer">
        <div className="NoResultHeader">
          <h1 className="u-h1">Sorry, no results! </h1>
        </div>
        <div className="NoResultText u-h4 ">
          <p>
            {`Your search for ${searchTerm}* did not match any results. Please modify your
            search terms and try again.`}
          </p>
        </div>

        <div className="search__container" data-autocomplete-true="">
          <form className="search search__form" action="/search">
            <div className="search__wrapper">
              <input
                type="text"
                name="search"
                placeholder="Find what you're looking for here"
                value={searchValue}
                onChange={handleChange}
              />
              <button
                type="submit"
                name="submit"
                className="search__button icon-search"
                value=" "
                onClick={onSearchSubmit}
              >
                <span className="icon-search">
                  <SearchIcon />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoResultFound;
