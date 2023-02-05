import { Outlet, Route, Routes } from "react-router-dom";

import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Footer/Footer";
import Navigation from "./Pages/NavB/Navbar";
import Home from "./Pages/Home/Home";
import AllCategory from "./Pages/AllCategory/AllCategory";
import AllBrands from "./Pages/AllBrands/AllBrands";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import CategoryDetails from "./Components/Category/CategoryDetails";
import Cart from "./Pages/Cart/Cart";
import WishList from "./Pages/WichList/WichList";
import AboutPage from "./Pages/About/About";
import ContactPage from "./Pages/Contact/Contact";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Account from "./Pages/Account";
import Bestseller from "./Pages/Bestseller/Bestseller";
import LatestTec from "./Pages/LatestTec/LatestTec";
import Search from "./Pages/SearchPage/Search";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />

          <Route path="allcategory" element={<Outlet />}>
            <Route path="" element={<AllCategory />} />
            <Route path=":category" element={<CategoryDetails />} />
            <Route path=":category/:productID" element={<ProductDetails />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/bestseller" element={<Bestseller />} />
          <Route path="/latesttechnology" element={<LatestTec />} />
          <Route path="/search/:SearchId" element={<Search />} />

          <Route path="/brands" element={<AllBrands />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
