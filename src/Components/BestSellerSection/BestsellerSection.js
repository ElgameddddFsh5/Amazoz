import React, { useEffect } from "react";
import Bestseller from "../Utility/CategoryCards/BestsellerManCard";
import SubTitle from "../Utility/SubTitle/SubTitle";
import "./BestsellerSection.css";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../../ReduxToolKit/Slicess/ProductsSlices";
const BestsellerSection = () => {
  const ApiUrl = "https://fakestoreapi.com/products";

  const productsContainer = useSelector((state) => state.products);

  const dispatch = useDispatch();
  // const controller = new AbortController();
  // const signal = controller.signal;
  // console.log(productsContainer);
  // useEffect(() => {
  //   dispatch(
  //     FetchProducts(ApiUrl, { type: "productsSlice/fetchProducts", signal })
  //   );
  //   return () => {
  //     controller.abort();
  //   };
  // }, []);
  useEffect(() => {
    dispatch(FetchProducts(ApiUrl));
  }, [dispatch]);

  // const deleteShow = async (passedID) => {
  //   try {
  //     const result = productsContainer.filter((item) => {
  //       console.log(item.id);
  //       console.log(passedID);
  //       return passedID;
  //     });
  //     console.log(result);
  //     // await updateDoc(ProductId, {
  //     //   Products: result,
  //     // });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <div className="container">
        <SubTitle title="Best Seller" btntitle="More" pathText="/bestseller" />
        {productsContainer.length === 0 ? (
          <div className="circle-loader"></div>
        ) : (
          <div className="row mt-5 d-flex justify-content-between">
            {productsContainer
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
                  BestSellerCategory={product.category}
                />
              ))
              .slice(4, 8)}
          </div>
        )}
      </div>
    </>
  );
};

export default BestsellerSection;
