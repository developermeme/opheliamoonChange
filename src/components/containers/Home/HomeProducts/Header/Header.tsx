import React from "react";
import "./Header.scss";
import Stay_TrendyMobile from "./images/StayTrendyMble.jpg";
import Stay_TrendyDesk from "./images/StayTrendyDesk.jpg";

export const Header = () => {
  return (
    <div className="shopify-section shopify-section--bordered">
      <img
        className="desktop-banner-img"
        src={Stay_TrendyDesk}
        alt="Girl in a jacket"
      />
      <img
        className="mobile-banner-img"
        src={Stay_TrendyMobile}
        alt="Girl in a jacket"
      />
    </div>
  );
};
