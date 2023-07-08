import React from "react";
import SeachBar from "./seachBar";

const SearchBar = () => {
  return (
    <div style={{ marginTop: "10rem" }} className="flex center padding ">
      <div className="stack gap3">
        <h1 className="bigText textCenter  widthRestrict2">
          Handcrafted with attention to detail
        </h1>
        <p className="regularText textCenter  widthRestrict2 hideMobileAndTab">
           with your comfort in mind
        </p>

        <SeachBar />
      </div>
    </div>
  );
};

export default SearchBar;
