import React from "react";
// import CategoryDetails from "../../Components/Category/CategoryDetails";
// import CategoryContainer from "../../Components/Category/CategoryContainer";
import PaginationCompontent from "../../Components/Utility/PaginationCompontent";
import { FetchProducts } from "../../ReduxToolKit/Slicess/ProductsSlices";
// import { FetchCategory } from "../../ReduxToolKit/Slicess/CategorySlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CategoryCards from "../../Components/Utility/CategoryCards/CategoryCards";
// import { Link } from "react-router-dom";
import SubTitle from "../../Components/Utility/SubTitle/SubTitle";

const LatestTec = () => {
  // const ApiUrl = "https://fakestoreapi.com/products/";

  // main products api
  const ApiUrl =
    "https://63ce8cd56d27349c2b70a413.mockapi.io/products/products";
  // add products from redux into empty array
  const productsContainer = useSelector((state) => state.products);

  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(16);
  const dispatch = useDispatch();
  // get products fro redux tool kit
  useEffect(() => {
    dispatch(FetchProducts(ApiUrl));
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
    <div className="container mt-5 py-5">
      <SubTitle title="Latest technology" btntitle="" pathText="" />

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
      <PaginationCompontent
        postsPerPage={postsPerPage}
        totalPosts={productsContainer.length}
        paginate={paginate}
      />
    </div>
  );
};

export default LatestTec;
