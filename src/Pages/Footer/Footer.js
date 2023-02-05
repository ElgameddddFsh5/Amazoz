import React from "react";
const Footer = () => {
  return (
    // <!-- Footer -->
    <footer className="text-center text-lg-start border border-white mt-xl-5 pt-4">
      <div className="container p-4"></div>
      {/* <!-- Copyright --> */}
      <div className="text-center p-3 border-top border-gray">
        {/* © 2020 Copyright: */}
        <p> &copy;{new Date().getFullYear()}:Powered by Amazoz</p>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
    // <!-- Footer -->
  );
};

export default Footer;
