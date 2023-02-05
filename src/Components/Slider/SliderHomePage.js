import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slider1 from "../../images/MainSlider1.png";
import Slider2 from "../../images/MainSlider2.png";
import Slider3 from "../../images/MainSlider3.png";
import "./SliderHomePage.css";
import "../../index.css";
import { Link } from "react-router-dom";
const SliderHomePage = () => {
  const [, setSliderIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSliderIndex(next),
  };
  const slides = [
    {
      id: 1,
      image: Slider2,
      title: "New Arrivals",
      description:
        "Check out our latest collection of clothing and accessories",
      buttonText: "Shop Now",
      buttonLink: "/allcategory/electronics",
    },
    {
      id: 2,
      image: Slider3,
      title: "Summer Sale",
      description: "Get up to 50% off on selected items",
      buttonText: "View Deals",
      buttonLink: "/bestseller",
    },
    {
      id: 3,
      image: Slider1,
      title: "Free Shipping",
      description: "Get free shipping on all orders over $50",
      buttonText: "Learn More",
      buttonLink: "/allcategory/women's clothing",
    },
  ];

  return (
    <Slider {...settings} className="py-5 mt-4">
      {slides.map((slide) => (
        <div className="slick-slider" key={slide.id}>
          <img src={slide.image} alt={slide.title} />
          <div className="caption">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <Link to={slide.buttonLink}>{slide.buttonText}</Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderHomePage;
