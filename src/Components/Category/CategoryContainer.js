import React, { useEffect, useState } from "react";
// import Category from "./Category";
import CategoryCards from "../Utility/CategoryCards/CategoryCards";
import SubTitle from "../Utility/SubTitle/SubTitle";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../../ReduxToolKit/Slicess/ProductsSlices";
import { FetchCategory } from "../../ReduxToolKit/Slicess/CategorySlice";
// import { FetchProductsByCategory } from "../../ReduxToolKit/Slicess/ProductsByCategorySlice";
import PaginationCompontent from "../Utility/PaginationCompontent";

const CategoryContainer = () => {
  const ApiUrl = "https://fakestoreapi.com/products/";
  const productsContainer = useSelector((state) => state.products);
  const CategorysContainer = useSelector((state) => {
    return state.categories;
  });
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(16);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchProducts(ApiUrl));
    dispatch(FetchCategory());
  }, [dispatch]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = productsContainer.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="container mt-5 py-5">
        <SubTitle title="All Category's" btntitle="" pathText="" />
        <ul className="CategoryList">
          <li>
            <Link
              className="category-button"
              onClick={() => {
                dispatch(FetchProducts(ApiUrl));
              }}
            >
              All
            </Link>
          </li>
          {CategorysContainer.map((cat) => {
            return (
              <li key={cat.id}>
                <Link className="category-button" to={`${cat.category}`}>
                  {cat.category}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="row mt-5 mb-5 d-flex justify-content-between">
          {currentPosts.map((product) => (
            <CategoryCards
              key={product.id}
              img={product.image}
              CardTitle={`${product.category.slice(0, 25)}...`}
              CardTo={`${product.category}`}
            />
          ))}
        </div>
      </div>
      <PaginationCompontent
        postsPerPage={postsPerPage}
        totalPosts={productsContainer.length}
        paginate={paginate}
      />
    </>
  );
};

export default CategoryContainer;
