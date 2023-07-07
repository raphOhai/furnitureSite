import React from "react";
import SeachBar from "./seachBar";

const SearchBar = () => {
  return (
    <div style={{ marginTop: "10rem" }} className="flex center padding ">
      <div className="stack gap3">
        <h1 className="bigText textCenter  widthRestrict2">
          Crafted with excellent material.
        </h1>
        <p className="regularText textCenter  widthRestrict2">
          Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
          vivethe as it was for us to know what was to be done.
        </p>

        <SeachBar />
      </div>
    </div>
  );
};

export default SearchBar;
