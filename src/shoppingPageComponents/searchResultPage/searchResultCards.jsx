import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetMoreSearch, addToCart } from "../../function/FingertippsApiCall";
import { ShowAlert } from "../../function/alertFunctions";
import Cart2 from "../../assets/cart2";
import Animate from "../../function/Animation";
import AlertMessage from "../alertMessage";
import {
  apendSearchResults,
  saveSearchResults,
  saveSearchResultsPage,
} from "../../reducer/searchItems";

const SearchResultCards = () => {
  const { searchResults, searchQuery, searchResultPage } = useSelector(
    (state) => state.searchItems
  );
  Animate(searchResults);
  const dispatch = useDispatch();
  const resolve5 = (items) => {
    dispatch(apendSearchResults(items.products));
    dispatch(saveSearchResultsPage(items.currentPage));
  };
  return (
    <>
      <div className="productGrid padding">
        {searchResults.products ? (
          searchResults.products.map((item) => (
            <div key={item._id} className="slideDown">
              <div className="stack gap">
                <div className="card">
                  <div className="stack gap">
                    <img
                      className="responsive1"
                      src={item.photos[0] ? item.photos[0].picture : ""}
                      alt=""
                    />
                    <div
                      onClick={() => addToCart(item, dispatch) & ShowAlert()}
                      className="flex center"
                    >
                      <div className="flex gap pointer">
                        <Cart2 />
                        <p className="grayText  capitalize addToCart">
                          add to cart
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="grayText capitalize"> {item.name.slice(0, 14)}</p>
                <p className="smallHeading">${item.price}</p>
              </div>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>

      <div style={{ marginTop: "4rem" }} className="flex center">
        <button
          onClick={() =>
            GetMoreSearch(searchQuery, searchResultPage + 1, resolve5)
          }
          className="loadmoreBtn pointer"
        >
          <p>loadmore</p>
        </button>
      </div>
      {searchResults.products.length < 1 ? (
        <div className="flex center">
          <div className="stack gap">
            <div className="flex center">
              <img
                className="responsive1"
                src="/Not Found illustration.png"
                alt=""
              />
            </div>

            <div className="flex center">
              <div className="stack gap">
                <p className="smallHeading textCenter">Result Not Found</p>

                <p className="regularText textCenter ">
                  Please try again with another keywords
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchResultCards;
