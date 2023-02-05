import React from "react";
import "./Home.css";
import "../../index.css";
import SliderHomePage from "../../Components/Slider/SliderHomePage";
// import Footer from "../Footer/Footer";
// import Navigation from "../NavB/Navbar";
import Category from "../../Components/Category/Category";
import BestsellerSection from "../../Components/BestSellerSection/BestsellerSection";
import MarqueBrand from "../../Components/MarqueBrand/MarqueBrand";
import Latesttechnology from "../../Components/Latest technology/Latesttechnology";
import DiscountBanner from "../../Components/DiscountBanner/DiscountBanner";
import GotBackToTop from "../../Components/Utility/GotBackToTop";
const Home = () => {
  return (
    <>
      {/* <Navigation /> */}
      <SliderHomePage />
      <Category />
      <BestsellerSection />
      <DiscountBanner />
      <Latesttechnology />
      <MarqueBrand />
      <BestsellerSection />
      <GotBackToTop />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
