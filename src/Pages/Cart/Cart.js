import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
// import {  useSelector } from "react-redux";
import "./Cart.css";
// import {
//   ClearCart,
//   DeleteFromCart,
//   addToCart,
//   decrease,
// } from "../../ReduxToolKit/Slicess/CartSlice";
import { UserAuth } from "../../context/AuthContext";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { cartdb } from "../../firebase";

const Cart = () => {
  // const cartItems = useSelector((state) => state.cart);

  // const dispatch = useDispatch();
  const [CartProducts, setCartProducts] = useState([]);
  // const [total, setTotal] = useState(0);
  const { user } = UserAuth();
  // const wishlistItems = useSelector((state) => state.wishlist);

  useEffect(() => {
    onSnapshot(doc(cartdb, "users", `${user?.email}`), (doc) => {
      setCartProducts(doc.data()?.CartProducts);
    });
  }, [user?.email]);

  const ProductId = doc(cartdb, "users", `${user?.email}`);

  const deleteShow = async (passedID) => {
    try {
      const result = CartProducts.filter((item) => item.id !== passedID);
      await updateDoc(ProductId, {
        CartProducts: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteAllprod = async () => {
    try {
      await updateDoc(ProductId, {
        CartProducts: [],
      });
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(CartProducts);
  const UpdateUser = async () => {
    try {
      const result = CartProducts.filter((item) => item.quantity);
      await updateDoc(ProductId, {
        CartProducts: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const TotalPrice = CartProducts?.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <div className="container mt-5 py-5 ">
      <h1 className="text-center">Your Cart</h1>
      <button className="btn btn-danger mb-3" onClick={() => deleteAllprod()}>
        Clear All
      </button>
      <h4>Total Price:{TotalPrice?.toFixed(2)}</h4>
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

        {!CartProducts ? (
          <tbody>
            <tr>
              <td>
                <h1>Reloading...</h1>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {CartProducts.map((item) => (
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

export default Cart;
// البيدج ديه ممكن تتحول كاملة لكمبوننت واقدر استعملها في الويش ليست
