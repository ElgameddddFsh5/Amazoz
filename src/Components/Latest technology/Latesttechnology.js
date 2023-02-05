import React, { useEffect } from "react";
import SubTitle from "../Utility/SubTitle/SubTitle";
import Bestseller from "../Utility/CategoryCards/BestsellerManCard";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../../ReduxToolKit/Slicess/ProductsSlices";

const Latesttechnology = () => {
  const ApiUrl = "https://fakestoreapi.com/products";

  const products = useSelector((state) => {
    // console.log(state);
    return state.products;
  });

  const dispatch = useDispatch();
  // console.log(products);

  useEffect(() => {
    dispatch(FetchProducts(ApiUrl));
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <SubTitle
          title="Latest technology"
          btntitle="More"
          pathText="/latesttechnology"
        />
        {products.length === 0 ? (
          <div className="circle-loader"></div>
        ) : (
          <div className="row mt-5 d-flex justify-content-between">
            {products
              .map((product) => (
                <Bestseller
                  key={product.id}
                  bestsellerimg={product.image}
                  BestSellerText={`${product.description.slice(0, 50)}...`}
                  BestSellerCardtitle={`${product.title.slice(0, 25)}...`}
                  BestSellerPrice={product.price}
                  BestStars={product.rating.rate}
                  BestSellerto={product.id}
                  BestSellerProd={product}
                  CartProud={product}
                  BestSellerCategory={product.category}
                />
              ))
              .slice(10, 14)}
          </div>
        )}
      </div>
    </>
  );
};

export default Latesttechnology;
