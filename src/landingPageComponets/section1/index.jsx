import React from "react";
import Btn from "../btn/Btn";
import Add from "../../assets/add";
import { useHistory } from "react-router-dom";
import Animate from "../../function/Animation";

const Section1 = () => {
  Animate();
  return (
    <div>
      <div className="padding">
        <div className="mainGrid">
          <div className="slideDown group">
            <div className="stack gap4">
              <h1 className="bigText">Crafted with excellent material.</h1>
              <p className="regularText">
                Versatile Design: Whether you're furnishing a cozy apartment or
                a spacious home, our furniture is designed to seamlessly
                integrate into any space. We offer a diverse range of styles,
                from timeless classics to contemporary masterpieces, catering to
                various interior design preferences
              </p>
              <Btn />
            </div>
          </div>
          <div className="slideDown group">
            <div className="relative shiftTop2">
              <div className="backDrop flex center">
                <div
                  style={{ marginTop: "8rem" }}
                  className="stack ga textCenter"
                >
                  <p className="darkText">Nordic chair</p>
                  <p className="darkText">₦35,000</p>
                </div>
              </div>
              <div className="flex center">
                <img
                  id="im"
                  className="imageTrick1 responsive"
                  src="/p1.png"
                  alt=""
                />
              </div>

              <div className="flex center">
                <div className="trickBtn">
                  <div className="">
                    <div className="infoBoxCircle shadow  ">
                      <div className="flex center">
                        <Add />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slideDown group">
            <div className="stack gap3">
              <div className="flex center">
                <img className="responsiv" src="/product-2.png " alt="" />
              </div>
              <div className="stack ga textCenter">
                <p className="darkText">Nordic chair</p>
                <p className="darkText">₦70,000</p>
              </div>
            </div>
          </div>
          <div className="slideDown group">
            <div className="stack gap3">
              <div className="flex center">
                <img className="responsiv" src="/product-3.png " alt="" />
              </div>
              <div className="stack ga textCenter">
                <p className="darkText">Nordic chair</p>
                <p className="darkText">₦20,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
