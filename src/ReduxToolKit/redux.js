import { configureStore } from "@reduxjs/toolkit";
import ProductsSlices from "./Slicess/ProductsSlices";
import CategorySlice from "./Slicess/CategorySlice";
import ProductsByCategorySlice from "./Slicess/ProductsByCategorySlice";
import CartSlice from "./Slicess/CartSlice";
import productsDetailsSlice from "./Slicess/ProductsDetailsRedux";
import WishListSlice from "./Slicess/WishListSlice";
export const store = configureStore({
  reducer: {
    products: ProductsSlices,
    categories: CategorySlice,
    searchcategory: ProductsByCategorySlice,
    cart: CartSlice,
    productsdetails: productsDetailsSlice,
    wishlist: WishListSlice,
  },
});
