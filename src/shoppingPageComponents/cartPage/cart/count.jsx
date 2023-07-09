import { decreaseItemCount, increaseItemCount } from "fingertipps-handshakes";
import React from "react";

import { useDispatch } from "react-redux";
import { storeId, visitorId } from "../../../function/FingertippsApiCall";
import {
  decreaseItemCountInCart,
  inscreaseItemCount,
} from "../../../reducer/cartItems";

const Count = ({ count, item }) => {
  const dispatch = useDispatch();

  const decreaseCart = () => {
    dispatch(decreaseItemCountInCart(item));
  };
  const resolve = (item) => {
    console.log(resolve);
  };
  const increaseCart = () => {
    dispatch(inscreaseItemCount(item));
  };
  return (
    <div className="flex gap">
      <div
        onClick={() => decreaseItemCount(visitorId, storeId, item, resolve) & decreaseCart()}
        className="decreaseBox pointer"
      >
        <div style={{ marginTop: "-.6rem" }} className="flex center">
          <div>
            <p>-</p>
          </div>
        </div>
      </div>
      <div className="countBox">
        <div style={{ marginTop: "-.6rem" }} className="flex center">
          <div>
            <p>{count}</p>
          </div>
        </div>
      </div>
      <div
        onClick={() => increaseItemCount(visitorId, storeId, item, resolve) & increaseCart()}
        className="increaseBox pointer"
      >
        <div style={{ marginTop: "-.6rem" }} className="flex center">
          <div>
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
