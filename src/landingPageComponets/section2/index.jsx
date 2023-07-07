import React from "react";
import YellowDotted from "../../assets/YellowDotted";
import Truck from "../../assets/Truck";
import Shopbag from "../../assets/Shopbag";
import Support from "../../assets/Support";
import Return from "../../assets/Return";
import Animate from "../../function/Animation";

const Section2 = () => {
  Animate()
  return (
    <div className="padding ">
      <div className="grid2">
        <div>
          <div className="stack gap4">
            <div className="stack gap">
              <h1 className="bigText">Why Choose Us</h1>

              <p className="grayText widthRestrict">
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was for us to know what was to be done. the
              </p>
            </div>
            <div className="stack gap3">
              <div className="flexBox">
                <div>
                  <div className="stack gap">
                    <Truck />
                    <h2 className="smallHeading">Fast & Free Shipping </h2>
                    <p className="grayText widthRestrict">
                      Donec mattis porta eros, aliquet finibus risus interdum
                      at. Nulla vivethe as it was
                    </p>
                  </div>
                </div>
                <div>
                  <div className="stack gap">
                    <Shopbag />
                    <h2 className="smallHeading">Easy to Shop</h2>
                    <p className="grayText widthRestrict">
                      Donec mattis porta eros, aliquet finibus risus interdum
                      at. Nulla vivethe as it was
                    </p>
                  </div>
                </div>
              </div>

              <div className="flexBox">
                <div>
                  <div className="stack gap">
                    <Support />
                    <h2 className="smallHeading">Fast & Free Shipping </h2>
                    <p className="grayText widthRestrict">
                      Donec mattis porta eros, aliquet finibus risus interdum
                      at. Nulla vivethe as it was
                    </p>
                  </div>
                </div>

                <div>
                  <div className="stack gap">
                    <Return />
                    <h2 className="smallHeading">Easy to Shop</h2>
                    <p className="grayText widthRestrict">
                      Donec mattis porta eros, aliquet finibus risus interdum
                      at. Nulla vivethe as it was
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex end">
            <div className="relative">
              <div className="imageTrick1Dot slideDown group">
                <YellowDotted />
              </div>
              <img src="/choose.png" className="responsive sideSlide1 group" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
