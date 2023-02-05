import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const ProductsByCategoryUrl = "https://fakestoreapi.com/products/category";

export const FetchProductsByCategory = createAsyncThunk(
  "ProductsByCategorySlice/FetchProductsByCategory",
  async (CatName) => {
    const res = await fetch(`${ProductsByCategoryUrl}/${CatName}`);
    const data = await res.json();
    return data;
  }
);

const ProductsByCategorySlice = createSlice({
  initialState: [],
  name: "ProductsByCategorySlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchProductsByCategory.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = ProductsByCategorySlice.actions;
export default ProductsByCategorySlice.reducer;
