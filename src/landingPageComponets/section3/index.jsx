import React from "react";
import BlueDotted from "../../assets/BlueDotted";
import Btn from "../btn/Btn";
import Animate from "../../function/Animation";

const Section3 = () => {
  Animate();
  return (
    <div className="padding">
      <div className="grid2">
        <div className="">
          <div className="relative ">
            <div className="imageTrick1Dot2 fadeIn group">
              <BlueDotted />
            </div>
            <div className="flex center fadeIn group">
              <img className="responsive " src="/img-grid-1.png" alt="" />
            </div>

            <div className="trickImage2 fadeIn group">
              <img className="responsive1 " src="/img-grid-2.png" alt="" />
            </div>

            <div className="trickImage1 fadeIn group">
              <img
                className="elevate responsive1 "
                src="/MaskChair.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="stack gap4">
            <div className="stack gap">
              <h1 className="bigText widthRestrict ">
                We help you make Modern Interior Design{" "}
              </h1>

              <p className="grayText widthRestrict ">
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was for us to know what was to be done. the
                this is a long post for the text.`This small text has to be
                place here, since this is a place holder. You can also chane it.
              </p>
            </div>
            <div className="stack gap3">
              {/* <div className="flexBox">
                <div>
                  <div className="stack gap">
                    <p className="grayText widthRestrict">
                      Donec mattis porta eros,let aliquet finibus ri
                    </p>
                  </div>
                </div>
                <div>
                  <div className="stack gap">
                    <p className="grayText widthRestrict">
                      Donec mattis porta eros,let aliquet finibus ri
                    </p>
                  </div>
                </div>
              </div>

              <div className="flexBox">
                <div>
                  <div className="stack gap">
                    <p className="grayText widthRestrict">
                      Donec mattis porta eros,let aliquet finibus ri
                    </p>
                  </div>
                </div>

                <div>
                  <div className="stack gap">
                    <p className="grayText widthRestrict">
                      Donec mattis porta eros,let aliquet finibus ri
                    </p>
                  </div>
                </div>
              </div> */}
            </div>

            <Btn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
