import React from "react";
import Header from "../../landingPageComponets/header";
import SearchResultCards from "./searchResultCards";
import SearchBar from "../productPage/searchBar";
import Footer from "../../landingPageComponets/footer";
import AlertMessage from "../alertMessage";
import { InitializeHandShake } from "fingertipps-handshakes";
import { storeId, visitorId } from "../../function/FingertippsApiCall";

const SearchPage = () => {

  return (
    <div className="maxWidth">
      <AlertMessage />
      <div className="stack gap4">
        <Header />
        <div className="">
          <SearchBar />
        </div>
        <SearchResultCards />
        <Footer />
      </div>
    </div>
  );
};

export default SearchPage;
