import React from "react";
import Logo2 from "../assets/Logo2";
import InterSectionChecker from "../function/observer";
import { drawSvg } from "../function/alertFunctions";

const Loader = () => {
  InterSectionChecker("logoSvg", drawSvg);
  return (
    <div id="loader" className="loaderContainer flex center">
      <div style={{ marginLeft: "-5rem" }} className="relative">
        <div className="logoSvg">
          <Logo2 />
        </div>

        <p id="logoText" className="logoText sideSlide">
          rueBuy
        </p>
      </div>
    </div>
  );
};

export default Loader;
