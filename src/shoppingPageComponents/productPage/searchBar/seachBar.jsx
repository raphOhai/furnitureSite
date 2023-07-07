import React from "react";
import SearchIcon from "../../../assets/searchIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  saveSearchQuery,
  saveSearchResults,
} from "../../../reducer/searchItems";
import { Search } from "../../../function/FingertippsApiCall";
import { useHistory } from "react-router-dom";

const SeachBar = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const { searchQuery } = useSelector((state) => state.searchItems);
  const ResolveAction = (items) => {
    dispatch(saveSearchResults(items));
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
            onClick={() => Search(searchQuery, ResolveAction)}
            className="Searchbtn"
          >
            <p className="btnText1">Search</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeachBar;
