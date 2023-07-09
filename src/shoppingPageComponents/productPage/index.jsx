import React from "react";
import Header from "../../landingPageComponets/header";
import SearchBar from "./searchBar";
import ProductCards from "./productcards/productCards";
import Footer from "../../landingPageComponets/footer";
import AlertMessage from "../alertMessage";
import { InitializeHandShake } from "fingertipps-handshakes";
import { storeId, visitorId } from "../../function/FingertippsApiCall";

const Product = () => {

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
