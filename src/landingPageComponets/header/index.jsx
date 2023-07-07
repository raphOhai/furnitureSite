import React from "react";
import CartIcon from "../../assets/cartIcon";
import UserIcon from "../../assets/userIcon";
import { useHistory } from "react-router-dom";
import { scrollToTop } from "../../function/FingertippsApiCall";
import Logo2 from "../../assets/Logo2";
import Logo from "../../assets/logo";

const Header = () => {
  const history = useHistory();
  return (
    <>
      <div id="top" className="fixed  maxWidt">
        <div className="header padding backGround ">
          <div
            onClick={() => scrollToTop() & history.push("/")}
            className="flex center"
          >
            <div className="relative pointer">
              <div className="logoSvg">
                <Logo />
              </div>

              <p id="logoText" className="logoText ">
                rueBuy
              </p>
            </div>
          </div>
          <div className="flex center">
            <div className="headerContent gap2">
              <p
                onClick={() => scrollToTop() & history.push("/")}
                className="smallHeading hideMobileAndTab pointer"
              >
                Home
              </p>
              <p
                onClick={() => scrollToTop() & history.push("/products")}
                className="smallHeading hideMobileAndTab pointer"
              >
                Shop Now
              </p>
              <p className=" smallHeading hideMobileAndTab pointer">
                Categories
              </p>
              <div className="pointer" onClick={() => scrollToTop() & history.push("/cart")}>
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
