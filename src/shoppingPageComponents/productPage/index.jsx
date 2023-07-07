import React from "react";
import Header from "../../landingPageComponets/header";
import SearchBar from "./searchBar";
import ProductCards from "./productcards/productCards";
import Footer from "../../landingPageComponets/footer";
import AlertMessage from "../alertMessage";

const Product = () => {
  return (
    <>
      <div className="stack gap4">
        <AlertMessage />
        <Header />

        <div className="">
          <SearchBar />
        </div>
        <ProductCards />
        <Footer />
      </div>
    </>
  );
};

export default Product;
