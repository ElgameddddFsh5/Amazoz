// import { createSlice } from "@reduxjs/toolkit";

// const WishListSlice = createSlice({
//   initialState: [],
//   name: "WishListSlice",
//   reducers: {
//     addToWishList: (state, action) => {
//       const findProduct = state.find((prod) => {
//         return prod.id === action.payload.id;
//       });
//       if (findProduct) {
//         findProduct.quantity += 1;
//       } else {
//         const productClone = { ...action.payload, quantity: 1 };
//         state.push(productClone);
//       }
//     },
//     decrease: (state, action) => {
//       const findProduct = state.find((prod) => {
//         return prod.id === action.payload.id;
//       });
//       if (findProduct) {
//         if (findProduct.quantity !== 1) {
//           findProduct.quantity -= 1;
//         }
//       } else {
//         const productClone = { ...action.payload, quantity: 1 };
//         state.push(productClone);
//       }
//     },
//     DeleteFromWishList: (state, action) => {
//       return state.filter((product) => product.id !== action.payload.id);
//     },
//     ClearWishList: (state, action) => {
//       return (state = []);
//     },
//   },
// });

// export const { addToWishList, DeleteFromWishList, ClearWishList, decrease } =
//   WishListSlice.actions;
// export default WishListSlice.reducer;
