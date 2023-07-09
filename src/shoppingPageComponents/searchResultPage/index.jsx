import React from "react";
import Header from "../../landingPageComponets/header";
import SearchResultCards from "./searchResultCards";
import SearchBar from "../productPage/searchBar";
import Footer from "../../landingPageComponets/footer";
import AlertMessage from "../alertMessage";
import { InitializeHandShake } from "fingertipps-handshakes";
import { storeId, visitorId } from "../../function/FingertippsApiCall";

const SearchPage = () => {
  InitializeHandShake(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRlY2ZmZTM4ZmE2MjY3MmQzNDllYmQiLCJpYXQiOjE2ODg1ODkwNTJ9.vzbL2l2n2yQxPCfzLClGjEkruThNFfTmNH3yIXsP_aY",
    storeId,
    visitorId
  );
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
