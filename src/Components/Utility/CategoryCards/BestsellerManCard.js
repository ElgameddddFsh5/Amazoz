import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";
import { AiFillHeart, AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../../ReduxToolKit/Slicess/CartSlice";
// import {
//   DeleteFromWishList,
//   addToWishList,
// } from "../../../ReduxToolKit/Slicess/WishListSlice";
import { UserAuth } from "../../../context/AuthContext";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { cartdb, db } from "../../../firebase";
import { useEffect } from "react";

const BestsellerManCard = ({
  bestsellerimg,
  BestSellerText,
  BestSellerCardtitle,
  BestSellerto,
  BestSellerPrice,
  BestStars,
  BestSellerProd,
  BestSellerCategory,
}) => {
  const { user } = UserAuth();
  const [like, setLike] = useState(false);
  const [, setSaved] = useState(false);
  // const dispatch = useDispatch();
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (user?.email) {
      setActive(!active);
    } else {
      alert("Please log in first");
    }
  };

  const [activecart, setactivecart] = useState(false);

  const handleActiveClick = () => {
    if (user?.email) {
      setactivecart(!activecart);
    } else {
      alert("Please log in first");
    }
  };

  const ProductId = doc(db, "users", `${user?.email}`);
  const SaveProduct = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(ProductId, {
        WiShListProducts: arrayUnion({
          id: BestSellerto,
          title: BestSellerCardtitle,
          img: bestsellerimg,
          price: BestSellerPrice,
          quantity: 1,
        }),
      });
    } else {
      alert("Please log in first");
    }
  };

  const [Products, setProducts] = useState([]);
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setProducts(doc.data()?.Products);
    });
  }, [user?.email]);
  // const deleteShow = async (passedID) => {
  //   try {
  //     const result = Products.filter((item) => item.id !== passedID);
  //     await updateDoc(ProductId, {
  //       Products: result,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const ProductCartId = doc(cartdb, "users", `${user?.email}`);

  const SaveCartProduct = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      
      await updateDoc(ProductCartId, {
        CartProducts: arrayUnion({
          id: BestSellerto,
          title: BestSellerCardtitle,
          img: bestsellerimg,
          price: BestSellerPrice,
          quantity: 1,
        }),
      });
    } else {
      alert("Please log in first");
    }
  };

  // const [CartProducts, setCartProducts] = useState([]);

  // const deleteCartShow = async (passedID) => {
  //   try {
  //     const result = ProductCartId.filter((item) => item.id !== passedID);
  //     await updateDoc(CartProducts, {
  //       CartProducts: result,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const deleteShow = async (passedID) => {
    try {
      const result = Products.filter((item) => {
        return item.id !== passedID;
      });
      await updateDoc(ProductId, {
        Products: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-md-3 BestSellerContent">
      <div className="card mb-3">
        <Link
          to={`/allcategory/${BestSellerCategory}/${BestSellerto}`}
          className="link-dark text-decoration-none"
        >
          <div className="p-2 BestSellerCard ">
            <img src={bestsellerimg} height="100" width="100" alt="Category" />

            <div className="BestSellerCardtext mt-3">
              <span>{BestSellerCardtitle}</span>{" "}
              <p className="mt-3">{BestSellerText}</p>
            </div>
          </div>
        </Link>
        <div className="heart">
          <AiOutlineShoppingCart
            onClick={() => {
              // dispatch(addToCart(CartProud));
              //   deleteCartShow(CartProud);
              SaveCartProduct();
              handleActiveClick();
              // dispatch(addToWishList(BestSellerProd));
              // if (activecart) {
              //   // dispatch(DeleteFromWishList(BestSellerProd));
              // }
            }}
            className="carticon"
            size={20}
          />
          <AiFillHeart
            onClick={() => {
              SaveProduct();
              handleClick();
              // dispatch(addToWishList(BestSellerProd));
              if (active) {
                // dispatch(DeleteFromWishList(BestSellerProd));
                // console.log(BestSellerto);
                deleteShow(BestSellerto);
              }
            }}
            className="hearticon"
            style={{ color: active ? "red" : "" }}
            size={20}
          />
        </div>
        <div className="PriceAndIcons">
          <p>{BestSellerPrice}</p>
          <div className="icons">
            <p>{BestStars} </p>
            <AiFillStar color="#c8b70e" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestsellerManCard;
