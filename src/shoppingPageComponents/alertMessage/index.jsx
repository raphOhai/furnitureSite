import React from "react";
import SuccessIcon from "../../assets/successIcon";

const AlertMessage = () => {
  return (
    <div className="alert">
      <div id="alertBox" className="alertBox sho">
        <div className="flex gap1">
          <SuccessIcon />
          <div className="stack gap">
            <p className="alertText">added successfully</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertMessage;
