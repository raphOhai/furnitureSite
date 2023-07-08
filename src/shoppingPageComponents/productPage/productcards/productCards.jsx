import React, { useEffect, useState } from "react";
import Cart2 from "../../../assets/cart2";
import { v4 as uuidv4 } from "uuid";
import { UserId } from "../../hooks/userId";

import { useDispatch, useSelector } from "react-redux";
import { apendProducts, saveProductPage, saveProducts } from "../../../reducer/products";
import {
  GetMoreProduct,
  addToCart,
  getCartItems,
} from "../../../function/FingertippsApiCall";
import { ShowAlert } from "../../../function/alertFunctions";
import Animate from "../../../function/Animation";
import { updateCartCount } from "../../../reducer/cartItems";

const ProductCards = () => {
  const { productsItems, PrductPage } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  Animate(productsItems);
  UserId();
  const resolve = (item) => {
    dispatch(saveProducts(item.products));
    dispatch(saveProductPage(item.currentPage));
  };

  const resolve2 = (item) => {
    dispatch(apendProducts(item.products));
    dispatch(saveProductPage(item.currentPage));
  };
  useEffect(() => {
    if (productsItems ? productsItems.length > 0 : "") {
      return;
    }
    getCartItems(dispatch);
    console.log(uuidv4());
    fetch(
      `https://fingertipps.store/user/collection1/644ecffe38fa62672d349ebd`,
      {
        method: "post",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          // page: currentProductPage,
        }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        resolve(result);
        console.log(result);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      <div className="productGrid padding">
        {productsItems
          ? productsItems.map((item) => (
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
                  <p className="grayText capitalize">
                    {" "}
                    {item.name.slice(0, 14)}
                  </p>
                  <p className="smallHeading">${item.price}</p>
                </div>
              </div>
            ))
          : ""}
      </div>
      <div style={{marginTop:"4rem"}} className="flex center">
        <button
          onClick={() => GetMoreProduct(PrductPage + 1, resolve2)}
          className="loadmoreBtn pointer"
        >
          <p>loadmore</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
