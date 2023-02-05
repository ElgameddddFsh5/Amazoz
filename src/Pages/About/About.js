import React from "react";
import "./About.css";
const AboutPage = () => {
  return (
    <div className="about-container ">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <p>
          Welcome to our{" "}
          <span className="highlight">Amazoz e-commerce website</span>, where
          you can find a wide range of
          <span className="highlight">products</span> at unbeatable prices. We
          pride ourselves on offering the latest fashion trends, high-quality
          electronics, and an extensive selection of home goods and appliances.
          With easy navigation, secure payment options and fast delivery,
          shopping with us is a seamless and enjoyable experience.
        </p>
        <p>
          Our website features a user-friendly design, making it easy for you to
          find what you're looking for. You can browse by category, brand or
          price, and filter your search to find exactly what you need. We also
          offer personalized recommendations based on your browsing history and
          previous purchases, making it easier for you to find the products you
          love.
        </p>
        <p>
          We are constantly updating our inventory and expanding our product
          offerings, so be sure to check back often for new and exciting
          products. We also offer flexible return and exchange policies, so you
          can shop with confidence. Thank you for choosing our e-commerce
          website. We look forward to helping you find the perfect products at
          unbeatable prices.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
