import React from "react";
import Header from "../../../landingPageComponets/header";
import { useEffect } from "react";

import Cartitems from "./cartitems";
import Footer from "../../../landingPageComponets/footer";
import { InitializeHandShake, getCartItems } from "fingertipps-handshakes";
import { storeId, visitorId } from "../../../function/FingertippsApiCall";
import { useDispatch } from "react-redux";
import { saveCartItems } from "../../../reducer/cartItems";

const Cart = () => {
  const dispatch = useDispatch();
  const resolveFunction = (result) => {
    dispatch(saveCartItems(result));
  };
  useEffect(() => {
    getCartItems(resolveFunction);
  }, []);
  InitializeHandShake(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlY2ZmZTM4ZmE2MjY3MmQzNDllYmQiLCJpYXQiOjE2ODg1ODkwNTJ9.vzbL2l2n2yQxPCfzLClGjEkruThNFfTmNH3yIXsP_aY",
    storeId,
    visitorId
  );
  return (
    <div className="stack gap4">
      <Header />
      <div style={{ marginTop: "8rem" }}>
        <Cartitems />
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
