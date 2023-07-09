import React from "react";
import Header from "../../../landingPageComponets/header";
import { useEffect } from "react";

import Cartitems from "./cartitems";
import Footer from "../../../landingPageComponets/footer";
import { getCartItems } from "fingertipps-handshakes";
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
