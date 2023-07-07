import React from "react";
import Msg from "../../assets/Msg";
import Send from "../../assets/Send";
import FaceBook from "../../assets/faceBook";
import Instagram from "../../assets/instagram";
import Linkedin from "../../assets/linkedin-in";
import Twitter from "../../assets/twitter";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "white", paddingTop: "5rem" }}
      className="padding"
    >
      <div className="stack gap4">
        <div className="grid3">
          <div className="stack gap2">
            <div className="flex gap">
              <Msg />
              <div className="flex center">
                <p className="smallHeading">Subscribe to Newsletter</p>
              </div>
            </div>
            <div className="flex gap">
              <div className="inputBox">
                <input placeholder="Enter your e-mail" />
              </div>
              <div className="inputBox">
                <input placeholder="Enter your e-mail" />
              </div>
              <div className="greenBox">
                <div className="flex center">
                  <Send />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ marginTop: "-9rem" }}>
              <img className="responsive1" src="/sof1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="stack gap1">
          <div className="flex start">
            <p className="logoText">TrueBuy</p>
          </div>
          <div className="grid4 gap3">
            <div>
              <p className="grayText widthRestrict ">
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was for us to know what was to be done. the
              </p>
            </div>

            <div className="stack gap">
              <p className="grayText widthRestrict">About us</p>
              <p className="grayText widthRestrict">Services</p>
              <p className="grayText widthRestrict">Blog</p>
              <p className="grayText widthRestrict">Contact us</p>
            </div>

            <div className="stack gap">
              <p className="grayText widthRestrict">About us</p>
              <p className="grayText widthRestrict">Services</p>
              <p className="grayText widthRestrict">Blog</p>
              <p className="grayText widthRestrict">Contact us</p>
            </div>
            <div className="stack gap">
              <p className="grayText widthRestrict">About us</p>
              <p className="grayText widthRestrict">Services</p>
              <p className="grayText widthRestrict">Blog</p>
              <p className="grayText widthRestrict">Contact us</p>
            </div>
            <div className="stack gap">
              <p className="grayText widthRestrict">About us</p>
              <p className="grayText widthRestrict">Services</p>
              <p className="grayText widthRestrict">Blog</p>
              <p className="grayText widthRestrict">Contact us</p>
            </div>
          </div>
        </div>
        <div className="flex start gap1">
          <div className="footerCircle">
            <div className="flex center">
              <FaceBook />
            </div>
          </div>
          <div className="footerCircle">
            <div className="flex center">
              <Instagram />
            </div>
          </div>
          <div className="footerCircle">
            <div className="flex center">
              <Linkedin />
            </div>
          </div>
          <div className="footerCircle">
            <div className="flex center">
              <Twitter />
            </div>
          </div>
        </div>

        <div className="stroke"></div>

        <div className="flex center">
          <p className="grayText paddingBottom"> © Copyright 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
