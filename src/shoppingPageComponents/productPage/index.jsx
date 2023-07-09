import React from "react";
import Header from "../../landingPageComponets/header";
import SearchBar from "./searchBar";
import ProductCards from "./productcards/productCards";
import Footer from "../../landingPageComponets/footer";
import AlertMessage from "../alertMessage";
import { InitializeHandShake } from "fingertipps-handshakes";
import { storeId, visitorId } from "../../function/FingertippsApiCall";

const Product = () => {
  InitializeHandShake(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlY2ZmZTM4ZmE2MjY3MmQzNDllYmQiLCJpYXQiOjE2ODg1ODkwNTJ9.vzbL2l2n2yQxPCfzLClGjEkruThNFfTmNH3yIXsP_aY",
    storeId,
    visitorId
  );
  return (
    <>
      <div className="stack gap4 ">
        <AlertMessage />
        <Header />

        <div className="maxWidth">
          <SearchBar />
        </div>
        <div className="maxWidth">
          <ProductCards />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Product;
