import React from "react";
import InfoBox from "../infoBox";
import { AnimateOnScroll } from "../../function/alertFunctions";

const Hero = () => {
  AnimateOnScroll("Eeeeee");
  AnimateOnScroll("Eeee");
  return (
    <div className=" overFLowHiden">
      <div></div>
      <div className="flex center heroDiv  overFLowHiden">
        <div className="relative">
          <div className="infoBoxContent1 hideMobileAndTa">
            <InfoBox
              name={"sofa"}
              price={"100,000"}
              discript={"2-seat sofa, Vissle grey"}
              id={"Eeeeee"}
            />
          </div>
          <div className="infoBoxContent2 hideMobile">
            <InfoBox
              name={"Antique rug"}
              price={"300,000"}
              discript={"Italian Antique rugs "}
              id={"Eeee"}
            />
          </div>
          <p></p>
          {/* <div className="infoBoxContent3">
          <InfoBox />
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
