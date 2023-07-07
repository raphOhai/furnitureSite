import React, { useEffect, useState } from "react";
import Cart2 from "../../../assets/cart2";
import { v4 as uuidv4 } from "uuid";
import { UserId } from "../../hooks/userId";

import { useDispatch, useSelector } from "react-redux";
import { saveProducts } from "../../../reducer/products";
import { addToCart } from "../../../function/FingertippsApiCall";
import { ShowAlert } from "../../../function/alertFunctions";
import Animate from "../../../function/Animation";

const ProductCards = () => {
  const { productsItems } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  Animate(productsItems )
  UserId();
  useEffect(() => {
    if (productsItems ? productsItems.length > 0 : "") {
      return;
    }
    console.log(uuidv4());
    fetch(`http://localhost:5001/user/collection1/644ecffe38fa62672d349ebd`, {
      method: "post",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        // page: currentProductPage,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        dispatch(saveProducts(result.products));
      })
      .catch((err) => {});
  }, []);

  return (
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

export default ProductCards;
