import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";
const CategoryCards = ({ img, CardTitle, CardTo }) => {
  return (
    <div className="col-md-3 mt-3">
      <div className="card  ">
        <Link to={CardTo} className="link-dark text-decoration-none">
          <div className="d-flex justify-content-between align-items-center p-2">
            <span>{CardTitle}</span>
            <img src={img} height="100" width="100" alt="Category" />{" "}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCards;
