import React from "react";
import { useSelector } from "react-redux";
import { addToCart } from "../../function/FingertippsApiCall";
import { ShowAlert } from "../../function/alertFunctions";
import Cart2 from "../../assets/cart2";
import Animate from "../../function/Animation";
import AlertMessage from "../alertMessage";

const SearchResultCards = () => {
  const { searchResults } = useSelector((state) => state.searchItems);
  Animate(searchResults);
  return (
    <div className="productGrid padding">

      {searchResults.products
        ? searchResults.products.map((item) => (
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
                      onClick={() => addToCart(item) & ShowAlert()}
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
        : ""}
    </div>
  );
};

export default SearchResultCards;
