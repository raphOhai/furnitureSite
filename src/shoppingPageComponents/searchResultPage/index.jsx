import React from "react";
import Header from "../../landingPageComponets/header";
import SearchResultCards from "./searchResultCards";
import SearchBar from "../productPage/searchBar";
import Footer from "../../landingPageComponets/footer";

const SearchPage = () => {
  return (
    <div>
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
