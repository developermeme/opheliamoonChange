import React from "react";
import { DownloadApp } from "./DownloadApp";
import logo from "../../../assets/image/nav/logo.png";
import "./FooterTopBar.scss";

export const FooterTopBar = () => {
  return (
    <div className="index-section u-h5">
      <div className="section--divider">
        <div className="grid grid--flush-bottom">
          <div className="grid__itemd medium-up--one-third">
            <div className="footer-title">DOWNLOAD OUR APP</div>
            <DownloadApp />
          </div>
          <div className="grid__itemd medium-up--one-third small--hide">
            <img src={logo} alt="logo" height="33" width="100" />
          </div>
          <div className="grid__itemd medium-up--one-third--large">
            <div className="footer-row">
              <div className="footer-col-sm">
                <div className="footer-about-us">
                  <div className="footer-title u-h4 mb5">CONTACT INFO</div>
                  <div
                    className="footer-subhead u-h5"
                    style={{ paddingTop: "7px", paddingBottom: "7px" }}
                  >
                    Ophelia-moon
                  </div>
                  <p>
                    MeMe Global inc 121 West Dudley Town Road, Unit B Bloomfield
                    CT 06002
                  </p>
                </div>
              </div>
              <div className="footer-col-sm">
                <div className="footer-about-us ">
                  <div className="footer-title u-h5">PHONE</div>
                  <p>9150041899</p>
                  <div className="footer-title  u-h5">EMAIL</div>
                  <p>customer@ophelia-moon.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTopBar;
