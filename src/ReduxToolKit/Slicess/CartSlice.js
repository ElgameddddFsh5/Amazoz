// import { createSlice } from "@reduxjs/toolkit";

// const CartSlice = createSlice({
//   initialState: [],
//   name: "CartSlice",
//   reducers: {
//     addToCart: (state, action) => {
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
//     DeleteFromCart: (state, action) => {
//       return state.filter((product) => product.id !== action.payload.id);
//     },
//     ClearCart: (state, action) => {
//       return (state = []);
//     },
//   },
// });

// export const { ClearCart, addToCart, DeleteFromCart, decrease } =
//   CartSlice.actions;
// export default CartSlice.reducer;
