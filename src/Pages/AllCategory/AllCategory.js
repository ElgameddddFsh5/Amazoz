import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
// import PaginationCompontent from "../../Components/Utility/PaginationCompontent";
import { Outlet } from "react-router-dom";

const AllCategory = () => {
  return (
    <>
      <CategoryContainer />
      <Outlet />
    </>
  );
};

export default AllCategory;
