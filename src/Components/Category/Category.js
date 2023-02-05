import "./Category.css";
import SubTitle from "../Utility/SubTitle/SubTitle";
import CategoryCards from "../Utility/CategoryCards/CategoryCards";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Outlet } from "react-router-dom";
import { FetchCategory } from "../../ReduxToolKit/Slicess/CategorySlice";

const Category = () => {
  const products = useSelector((state) => {
    return state.products;
  });

  const CategorysContainer = useSelector((state) => {
    return state.categories;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchCategory());
  }, [dispatch]);
  // console.log(CategorysContainer);
  return (
    <>
      <div className="container">
        <SubTitle title="Category" btntitle="More" pathText="allcategory" />

        {products.length === 0 ? (
          <div className="circle-loader"></div>
        ) : (
          <div className="row mt-5 d-flex justify-content-between">
            {CategorysContainer.map((product, ind) => (
              <CategoryCards
                key={product.id}
                img={product.image}
                CardTitle={product.category}
                CardTo={`allcategory/${product.category}`}
              />
            )).slice(0, 4)}
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Category;
