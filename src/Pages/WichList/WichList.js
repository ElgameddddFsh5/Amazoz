import React from "react";
import "./WichList.css";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import {
  ClearWishList,
  DeleteFromWishList,
  addToWishList,
  decrease,
} from "../../ReduxToolKit/Slicess/WishListSlice";
import { useEffect } from "react";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { UserAuth } from "../../context/AuthContext";
import { useState } from "react";

const WishList = () => {
  const dispatch = useDispatch();

  const [Products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const { user } = UserAuth();
  const wishlistItems = useSelector((state) => state.wishlist);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setProducts(doc.data()?.WiShListProducts);
    });
  }, [user?.email]);

  const ProductId = doc(db, "users", `${user?.email}`);

  const deleteShow = async (passedID) => {
    try {
      const result = Products.filter((item) => item.id !== passedID);
      // console.log(passedID);
      await updateDoc(ProductId, {
        WiShListProducts: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteAllprod = async () => {
    try {
      await updateDoc(ProductId, {
        WiShListProducts: [],
      });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(Products);
  const UpdateUser = async () => {
    try {
      const result = Products.filter((item) => item.quantity);
      await updateDoc(ProductId, {
        WiShListProducts: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const TotalPrice = Products?.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <div className="container mt-5 py-5 ">
      <h1 className="text-center">Your WishList</h1>
      <button className="btn btn-danger mb-3" onClick={() => deleteAllprod()}>
        Clear All
      </button>
      <h4>Total Price:${TotalPrice?.toFixed(2)}</h4>
      <Table responsive className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>

        {!Products ? (
          <tbody>
            <tr>
              <td>
                <h1>Reloading...</h1>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {Products.map((item) => (
              <tr key={item.id}>
                <td>{`${item.title.slice(0, 25)}...`}</td>
                <td className="item-quantity ">
                  <button
                    onClick={() => {
                      // dispatch(decrease(item));
                      item.quantity -= 1;
                      UpdateUser(item.quantity);
                    }}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => {
                      // dispatch(addToWishList(item));
                      item.quantity += 1;
                      UpdateUser(item.quantity);
                    }}
                  >
                    +
                  </button>
                </td>
                <td>${item.price}</td>
                <td>${item.quantity * item.price}</td>
                <td>
                  <img
                    src={item.img}
                    alt={item.img}
                    className="cart-table-img"
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger white-btn mt-2"
                    onClick={() => deleteShow(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    </div>
  );
};

export default WishList;
