import React, { useState } from "react";
import "./BackToTop.css";
function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`back-to-top-button ${showButton ? "show" : "hide"}`}
      onClick={handleClick}
    >
      Back to top
    </button>
  );
}

export default BackToTopButton;
