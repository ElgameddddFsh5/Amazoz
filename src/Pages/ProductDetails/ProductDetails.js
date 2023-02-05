import { Outlet, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { FetchProductsDetails } from "../../ReduxToolKit/Slicess/ProductsDetailsRedux";
import { cartdb } from "../../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";

const ProductDetails = () => {
  const product = useParams();
  const ProductsByCategoryUrl = "https://fakestoreapi.com/products";

  const productsdetails = useSelector((state) => state.productsdetails);

  const dispatch = useDispatch();

  const getProductcategories = () => {
    dispatch(
      FetchProductsDetails(`${ProductsByCategoryUrl}/${product.productID}`)
    );
  };
  useEffect(() => {
    getProductcategories();
  }, []);
  
  const { user } = UserAuth();
  const ProductCartId = doc(cartdb, "users", `${user?.email}`);
  
  const SaveCartProduct = async () => {
    if (user?.email) {
      await updateDoc(ProductCartId, {
        CartProducts: arrayUnion({
          id: productsdetails.id,
          title: productsdetails.title,
          img: productsdetails.image,
          price: productsdetails.price,
          quantity: 1,
        }),
      });
    } else {
      alert("Please log in first");
    }
  };

  return (
    <>
      <div className="product-details">
        <img src={productsdetails.image} alt={productsdetails.name} />
        <div className="text">
          <h1 className="product-name">{productsdetails.title}</h1>
          <p className="product-description">{productsdetails.description}</p>
          <p className="price">Price: ${productsdetails.price}</p>
          <button
            className="add-to-cart"
            onClick={() => {
              SaveCartProduct();
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default ProductDetails;
