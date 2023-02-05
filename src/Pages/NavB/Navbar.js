import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { BsCart3, BsSuitHeart, BsPerson } from "react-icons/bs";
import HeaderStyles from "./Navbar.module.css";
// import { useSelector } from "react-redux";
import { UserAuth } from "../../context/AuthContext";
import { CgProfile } from "react-icons/cg";
import { doc, onSnapshot } from "firebase/firestore";
import { cartdb, db } from "../../firebase";
// import { FetchProducts } from "../../ReduxToolKit/Slicess/ProductsSlices";

// fixed="top"
const Header = () => {
  const { user } = UserAuth();
  let CountCartItems = 0;
  let wishlistCounter = 0;
  // const cart = useSelector((state) => state.cart);
  // const WitshList = useSelector((state) => state.wishlist);
  const [Products, setProducts] = useState([]);
  const [CartNavProducts, setCartNavProducts] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  if (CartNavProducts) {
    CountCartItems = CartNavProducts;
  }

  if (Products) {
    wishlistCounter = Products;
  }

  useEffect(() => {
    let p = document.querySelector(".CartNumber");
    let pWishList = document.querySelector(".pWishList");
    if (CountCartItems.length > 0) {
      p.style = "background-color: rgb(185, 58, 58); color:#fff;";
    } else {
      p.style = "background-color: rgb(221, 221, 221); color:black;";
    }
    if (wishlistCounter.length > 0) {
      pWishList.style = "background-color: rgb(185, 58, 58); color:#fff;";
    } else {
      pWishList.style = "background-color: rgb(221, 221, 221); color:black;";
    }
  }, [CountCartItems, wishlistCounter]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setProducts(doc.data()?.WiShListProducts);
    });

    onSnapshot(doc(cartdb, "users", `${user?.email}`), (doc) => {
      setCartNavProducts(doc.data()?.CartProducts);
    });
  }, [user?.email]);

  useEffect(() => {
    if (query.length > 1) {
      navigate(`/search/${query}`);
    } else {
      navigate("/");
    }
  }, [query]);

  return (
    <Navbar
      expand="lg"
      className={` ${HeaderStyles.MainNavBar} position-fixed `}
    >
      <Container>
        <Link className="navbar-brand" to="/" onClick={() => {}}>
          Amazoz
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 align-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </Nav>
          <Nav className=" d-flex align-items-center   me-auto ">
            <Link
              className={`nav-link d-flex justify-content-center flex-column text-center align-items-center`}
              to="/wishlist"
            >
              <div className={HeaderStyles.ShoppingCart}>
                <BsSuitHeart size={25} />
                <p className={`${HeaderStyles.WishListItem} pWishList`}>
                  {!Products ? "0" : wishlistCounter.length}
                </p>
              </div>
              WishList
            </Link>

            <Link
              className={`nav-link d-flex justify-content-center flex-column text-center align-items-center`}
              to="/cart"
            >
              <div className={HeaderStyles.ShoppingCart}>
                <BsCart3 size={25} />
                <p className={`${HeaderStyles.CartItems} CartNumber`}>
                  {!CartNavProducts ? "0" : CountCartItems.length}
                </p>
              </div>
              Cart
            </Link>
            {user?.email ? (
              <>
                <Link
                  className="nav-link d-flex justify-content-center flex-column text-center align-items-center"
                  to="/account"
                >
                  <CgProfile size={25} />
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="nav-link d-flex justify-content-center flex-column text-center align-items-center"
                  to="/login"
                >
                  <BsPerson size={25} />
                  Login
                </Link>
              </>
            )}
          </Nav>

          <Form className="d-flex align-items-center">
            <Form.Control
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              type="search"
              placeholder="SearchByCategory..."
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
