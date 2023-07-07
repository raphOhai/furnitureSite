import React from "react";

import { useDispatch } from "react-redux";
import { decreaseItemCount, increaseItemCount } from "../../../function/FingertippsApiCall";

const Count = ({ count, item }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap">
      <div
        onClick={() => decreaseItemCount(item, dispatch)}
         className="decreaseBox pointer"
      >
        <div style={{ marginTop: "-.5rem" }} className="flex center">
          <div>
            <p>-</p>
          </div>
        </div>
      </div>
      <div className="countBox">
        <div style={{ marginTop: "-.5rem" }} className="flex center">
          <div>
            <p>{count}</p>
          </div>
        </div>
      </div>
      <div
        onClick={() => increaseItemCount(item, dispatch)}
        className="increaseBox pointer"
      >
        <div style={{ marginTop: "-.5rem" }} className="flex center">
          <div>
            <p>+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
