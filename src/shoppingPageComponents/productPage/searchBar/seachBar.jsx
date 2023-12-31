import React from "react";
import SearchIcon from "../../../assets/searchIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  saveSearchQuery,
  saveSearchResults,
  saveSearchResultsPage,
} from "../../../reducer/searchItems";
import { Search, storeId } from "../../../function/FingertippsApiCall";
import { useHistory } from "react-router-dom";
import { SearchProducts } from "fingertipps-handshakes";

const SeachBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { searchQuery } = useSelector((state) => state.searchItems);
  const ResolveAction = (items) => {
    dispatch(saveSearchResults(items));
    dispatch(saveSearchResultsPage(items.currentPage));
    history.push("/search");
  };

  return (
    <div className="searchBox">
      <div className="searchBarGrid">
        <div className="flex yoo gap">
          <div className="flex center">
            <SearchIcon />
          </div>
          <input
            onChange={(e) => dispatch(saveSearchQuery(e.target.value))}
            placeholder="search "
          />
        </div>
        <div className="flex end">
          <button
            onClick={() => SearchProducts(searchQuery, ResolveAction, 1)}
            className="Searchbtn pointer"
          >
            <p className="btnText1">Search</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeachBar;
