import React from "react";
import CartIcon from "../../assets/cartIcon";
import UserIcon from "../../assets/userIcon";
import { useHistory } from "react-router-dom";
import { scrollToTop } from "../../function/FingertippsApiCall";



const Header = () => {
  const history = useHistory();
  return (
    <>
      <div id="top" className="fixed">
        <div className="header padding backGround">
          <div onClick={() =>scrollToTop() & history.push("/")} className="flex center">
            <p className="logoText ">TrueBuy</p>
          </div>
          <div className="flex center">
            <div className="headerContent gap2">
              <p className="smallHeading hideMobileAndTab">Home</p>
              <p
                onClick={() => scrollToTop() &  history.push("/products") }
                className="smallHeading hideMobileAndTab"
              >
                Shop Now
              </p>
              <p className=" smallHeading hideMobileAndTab">Categories</p>
              <div onClick={() =>scrollToTop() & history.push("/cart")}>
                <CartIcon />
              </div>

              <UserIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
