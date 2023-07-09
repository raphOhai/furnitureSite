import React from "react";
import YellowDotted from "../../assets/YellowDotted";
import Truck from "../../assets/Truck";
import Shopbag from "../../assets/Shopbag";
import Support from "../../assets/Support";
import Return from "../../assets/Return";
import Animate from "../../function/Animation";

const Section2 = () => {
  Animate();
  return (
    <div className="padding ">
      <div className="grid2">
        <div>
          <div className="stack gap4">
            <div className="stack gap">
              <h1 className="bigText">Why Choose Us</h1>

              <p className="grayText widthRestrict">
                At TrueBuy, we take great pride in offering you a truly
                exceptional furniture experience that goes beyond mere
                functionality and aesthetics. Here's why you should choose us
              </p>
            </div>
            <div className="stack gap3">
              <div className="flexBox">
                <div>
                  <div className="stack gap">
                    <Shopbag />
                    <h2 className="smallHeading">Easy to Shop</h2>
                    <p className="grayText widthRestrict">
                      Shop with ease on Our web app and our mobile app
                    </p>
                  </div>
                </div>
                <div>
                  <div className="stack gap">
                    <Truck />
                    <h2 className="smallHeading">Fast & Free Shipping </h2>
                    <div className="widthRestrict">
                      <p className="grayText widthRestrict">
                        Get your funiture Delivered in less than 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flexBox">
                <div>
                  <div className="stack gap">
                    <Support />
                    <h2 className="smallHeading">24/Support </h2>
                    <p className="grayText widthRestrict">
                      At TrueBuy, we pride ourselves on providing exceptional
                      customer service that exceeds your expectations.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="stack gap">
                    <Return />
                    <h2 className="smallHeading">Easy to Shop</h2>
                    <p className="grayText widthRestrict">
                      you can return purchased item with 3weeks from the
                      purchased date!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="relative">
              <div className="imageTrick1Dot slideDown group">
                <YellowDotted />
              </div>
              <img
                src="/choose.png"
                className="responsive sideSlide1 group"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
