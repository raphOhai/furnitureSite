import React, { useEffect, useState } from "react";
import Count from "./count";
import Close from "../../../assets/Close";

import { useDispatch, useSelector } from "react-redux";
import { saveCartItems } from "../../../reducer/cartItems";

import { PaystackButton } from "react-paystack";
import Send from "../../../assets/Send";
import { saveAddress, saveEmail, saveName } from "../../../reducer/userDetails";
import { deleteSingleCartItem, getCartItems, submit } from "../../../function/FingertippsApiCall";

const Cartitems = () => {
  const dispatch = useDispatch();
  const { itemsInCart, total } = useSelector((state) => state.cartItems);
  const { name, email, address } = useSelector((state) => state.userDetails);
  useEffect(() => {
    getCartItems( dispatch);
  }, []);

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: total * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    // publicKey: "pk_live_db9fe8577612a18d920d186d82950b349fdc86f7",
    publicKey: "pk_test_787c0bd300e48e8088c77fcd1bfc613740c89210"
  };

  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const componentProps = {
    ...config,
    text: "pay now",
    onSuccess: (reference) => submit(reference, total, address, name, email, itemsInCart),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className="grid5 gap2 padding  maxWidth">
      <div className="flex start ">
        <div className="stack gap4">
          {itemsInCart
            ? itemsInCart.map((item) => (
                <div key={item._id} className="cartItemGrid cartListItem gap2">
                  <div>
                    <img
                      className="responsive1 cartImage "
                      src={item.photo[0].picture}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <div className="stack gap">
                      <p>{item.name}</p>
                      <p>₦{item.price}</p>
                      <Count
                        count={item.count
                          .reduce((a, c) => a + c, 0)
                          .toLocaleString()}
                        item={item}
                      />
                    </div>
                  </div>
                  <div
                    onClick={() => deleteSingleCartItem(item, dispatch)}
                    className="flex  center pointer"
                  >
                    <Close />
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
      <div className="stack gap2">
        <div className="stack gap">
          <div className="inputBox widthRestrict">
            <input
              onChange={(e) => dispatch(saveName(e.target.value))}
              placeholder="Enter your name"
            />
          </div>
          <div className="inputBox widthRestrict">
            <input
              onChange={(e) => dispatch(saveEmail(e.target.value))}
              placeholder="Enter your e-mail"
            />
          </div>
          <div className="inputBox widthRestrict">
            <input
              onChange={(e) => dispatch(saveAddress(e.target.value))}
              placeholder="Enter your address"
            />
          </div>
          {/* <div className="greenBox">
            <div className="flex center">
              <Send />
            </div>
          </div> */}
        </div>

        <PaystackButton className="btn2" {...componentProps} />
      </div>
    </div>
  );
};

export default Cartitems;
