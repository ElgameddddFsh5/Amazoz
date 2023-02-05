import React from "react";
import DisBimg from "../../images/Discount.png";
import "./DiscountBanner.css";
const DiscountBanner = () => {
  return (
    <div className="discountBanner container position-relative">
      <div className="  mt-5 discountBannerimg">
        <img src={DisBimg} alt="DiscountBannerImg" />
        <h1 className="discountText">Discounts up to 50% off</h1>
      </div>
    </div>
  );
};

export default DiscountBanner;
