import React, { useEffect, useState } from "react";
import Cart2 from "../../../assets/cart2";
import { v4 as uuidv4 } from "uuid";
import { UserId } from "../../hooks/userId";

import { useDispatch, useSelector } from "react-redux";
import {
  apendProducts,
  saveProductPage,
  saveProducts,
} from "../../../reducer/products";
import {
  GetMoreProduct,
  storeId,
  visitorId,
} from "../../../function/FingertippsApiCall";
import { ShowAlert } from "../../../function/alertFunctions";
import Animate from "../../../function/Animation";
import { updateCartCount } from "../../../reducer/cartItems";
import {
  GetProducts,
  InitializeHandShake,
  addToCart,
  getCartItems,
} from "fingertipps-handshakes";

const ProductCards = () => {
  const store = "644ecffe38fa62672d349ebd";
  const quest = JSON.parse(localStorage.getItem("quest"));
  const { productsItems, PrductPage } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  Animate(productsItems);
  UserId();
  const resolve = (item) => {
    dispatch(saveProducts(item.products));
    dispatch(saveProductPage(item.currentPage));
  };

  InitializeHandShake("AAZrWSBGLrqGDalSvEMpynr4+OWQUiLdJvV5fHEnGKk=", quest);

  const resolve2 = (item) => {
    dispatch(apendProducts(item.products));
    dispatch(saveProductPage(item.currentPage));
  };

  const resolve3 = (item) => {
    dispatch(updateCartCount(item));
  };

  const saveCartCount = (item) => {
    dispatch(updateCartCount(item.length));
  };
  const errorCather = (err) => {
    console.log(err);
  };
  useEffect(() => {
    if (productsItems ? productsItems.length > 0 : "") {
      return;
    }
    getCartItems(visitorId, saveCartCount);
    console.log(uuidv4());
    GetProducts(1, resolve);
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
                        onClick={() =>
                          addToCart(item, resolve3, errorCather) & ShowAlert()
                        }
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
                  <p className="smallHeading">₦{item.price.toLocaleString()}</p>
                </div>
              </div>
            ))
          : ""}
      </div>
      <div style={{ marginTop: "4rem" }} className="flex center">
        <button
          onClick={() => GetProducts(PrductPage + 1, resolve2)}
          className="loadmoreBtn pointer"
        >
          <p>loadmore</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCards;
