import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Bestseller from "../../Components/Utility/CategoryCards/BestsellerManCard";
import CategoryCards from "../../Components/Utility/CategoryCards/CategoryCards";
import { FetchProducts } from "../../ReduxToolKit/Slicess/ProductsSlices";

const Search = () => {
  const productsContainer = useSelector((state) => state.products);
  const SearchBy = useParams();
  const ApiUrl = "https://fakestoreapi.com/products";

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchProducts(ApiUrl));
  }, [dispatch]);
  // console.log(productsContainer);
  // console.log(SearchBy.SearchId);

  return (
    <div className="container mt-5 py-5">
      <div className="row">
        {productsContainer
          .filter((prod) => {
            return prod.category.toLowerCase().includes(SearchBy.SearchId);
          })
          .map((item) => {
            return (
              <Bestseller
                key={item.id}
                bestsellerimg={item.image}
                BestSellerText={`${item.description.slice(0, 50)}...`}
                BestSellerCardtitle={`${item.title.slice(0, 25)}...`}
                BestSellerPrice={item.price}
                BestStars={item.rating.rate}
                BestSellerto={item.id}
                BestSellerProd={item}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Search;
