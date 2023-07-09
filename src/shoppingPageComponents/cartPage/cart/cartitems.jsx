import React, { useEffect, useState } from "react";
import Count from "./count";
import Close from "../../../assets/Close";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemIncart,
  saveCartItems,
  updateCartCount,
} from "../../../reducer/cartItems";

import { PaystackButton } from "react-paystack";
import Send from "../../../assets/Send";
import { saveAddress, saveEmail, saveName } from "../../../reducer/userDetails";
import { storeId, visitorId } from "../../../function/FingertippsApiCall";
import {
  deleteSingleCartItem,
  getCartItems,
  savePaymentRecord,
} from "fingertipps-handshakes";
const Cartitems = () => {
  const dispatch = useDispatch();
  const { itemsInCart, total } = useSelector((state) => state.cartItems);
  const { name, email, address } = useSelector((state) => state.userDetails);
  const resolveFunction = (result) => {
    dispatch(saveCartItems(result));
  };
  useEffect(() => {
    getCartItems(resolveFunction);
  }, []);

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: total * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    // publicKey: "pk_live_db9fe8577612a18d920d186d82950b349fdc86f7",
    publicKey: "pk_test_787c0bd300e48e8088c77fcd1bfc613740c89210",
  };

  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const componentProps = {
    ...config,
    text: "pay now",
    onSuccess: (reference) =>
      savePaymentRecord(
        reference.reference,
        total,
        address,
        name,
        email,
        12345678,
        itemsInCart
      ),
    onClose: handlePaystackCloseAction,
  };
  const deleteCartItem = (item) => {
    dispatch(deleteItemIncart(item));
  };
  const UpdtateCartCount = (number) => {
    dispatch(updateCartCount(number));
  };
  return (
    <div className="grid5 gap2 padding  maxWidth">
      <div className="">
        <div className="stack gap4">
          {itemsInCart.length < 1 ? (
            <div className="flex center">
              <div className="flex center">
                <div className="stack gap">
                  <div className="flex center">
                    <img
                      className="responsive1"
                      src="/CartIllustartion.png"
                      alt=""
                    />
                  </div>

                  <div className="flex center">
                    <div className="stack gap">
                      <p className="smallHeading textCenter">
                        Your Cart is Empty
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
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
                      <p>₦{item.price.toLocaleString()}</p>
                      <Count
                        count={item.count
                          .reduce((a, c) => a + c, 0)
                          .toLocaleString()}
                        item={item}
                      />
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      deleteSingleCartItem(item, UpdtateCartCount) &
                      deleteCartItem(item)
                    }
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

        <PaystackButton className="btn2 pointer" {...componentProps} />
      </div>
    </div>
  );
};

export default Cartitems;
