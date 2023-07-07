import React from "react";

const InfoBox = ({name, price, discript, id}) => {
  return (
    <div id={id} className="fadeIn2">
      <div className="">
        <div className="stack gap">
          <div className="stack">
            <div className="stack gap mainBox glasify">
              <div className="flex start">
                <p className="infoName">{name}</p>
              </div>
              <div className="flex start">
                <p className="infoDiscription ">{discript}</p>
              </div>
              <div className="flex start">
                <p className="infoPrice">₦{price}</p>
              </div>
            </div>
            <div className="flex center">
              <div className="traingle glasify"></div>
            </div>
          </div>
          <div className="flex center">
            <div className="infoBoxCircle glasify"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
