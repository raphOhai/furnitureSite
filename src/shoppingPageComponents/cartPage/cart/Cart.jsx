import React from "react";
import Header from "../../../landingPageComponets/header";
import { useEffect } from "react";

import Cartitems from "./cartitems";
import Footer from "../../../landingPageComponets/footer";
import { getCartItems } from "../../../function/FingertippsApiCall";

const Cart = () => {
  useEffect(() => {
    getCartItems();
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
