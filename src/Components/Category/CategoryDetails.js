import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FetchProducts } from "../../ReduxToolKit/Slicess/ProductsSlices";
// import { FetchCategory } from "../../ReduxToolKit/Slicess/CategorySlice";
// import CategoryCards from "../Utility/CategoryCards/CategoryCards";
import SubTitle from "../Utility/SubTitle/SubTitle";
import "./Category.css";
import Bestseller from "../Utility/CategoryCards/BestsellerManCard";
import PaginationCompontent from "../Utility/PaginationCompontent";
const CategoryDetails = () => {
  const Category = useParams();

  const ProductsByCategoryUrl = "https://fakestoreapi.com/products/category";

  const productsContainer = useSelector((state) => state.products);
  // const ApiUrl =
  //   "https://63ce8cd56d27349c2b70a413.mockapi.io/products/products/";
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchProducts(`${ProductsByCategoryUrl}/${Category.category}`));
  }, [Category.category, dispatch]);

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
        <SubTitle
          title={`${Category.category} Category's`}
          btntitle=""
          pathText=""
        />
        <Link
          to="/allcategory"
          className="category-button"
          onClick={() => {
            dispatch(FetchProducts());
          }}
        >
          All
        </Link>
        {productsContainer.length === 0 ? (
          <div className="circle-loader"></div>
        ) : (
          <div className="row mt-5 mb-5 d-flex justify-content-between">
            {currentPosts.map((product) => (
              <Bestseller
                key={product.id}
                bestsellerimg={product.image}
                BestSellerText={`${product.description.slice(0, 50)}...`}
                BestSellerCardtitle={`${product.title.slice(0, 25)}...`}
                BestSellerPrice={`$${product.price}`}
                BestStars={product.rating.rate}
                BestSellerto={product.id}
                BestSellerProd={product}
                CartProud={product}
              />
            ))}
          </div>
        )}
        <PaginationCompontent
          postsPerPage={postsPerPage}
          totalPosts={productsContainer.length}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default CategoryDetails;
