import React from "react";
import Marquee from "react-fast-marquee";
import brand1 from "../../images/brand-01.png";
import brand2 from "../../images/brand-02.png";
import brand3 from "../../images/brand-03.png";
import brand4 from "../../images/brand-04.png";
import brand5 from "../../images/brand-05.png";
import brand6 from "../../images/brand-06.png";
import brand7 from "../../images/brand-07.png";
import brand8 from "../../images/brand-08.png";

import MarqStyles from "./Marq.module.css";
import SubTitle from "../Utility/SubTitle/SubTitle";
const MarqueBrand = () => {
  const BtnTitleValue = "More";
  const SubText = "Most popular brands";
  return (
    <section className={`${MarqStyles.MarqueeSection} `}>
      <div className="container">
        <SubTitle title={SubText} btntitle={BtnTitleValue} pathText="brands" />
        <div className="row">
          <Marquee gradientWidth={0} direction="left">
            <img src={brand1} alt="brand" />
            <img src={brand2} alt="brand" />
            <img src={brand3} alt="brand" />
            <img src={brand4} alt="brand" />
            <img src={brand5} alt="brand" />
            <img src={brand6} alt="brand" />
            <img src={brand7} alt="brand" />
            <img src={brand8} alt="brand" />
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default MarqueBrand;
