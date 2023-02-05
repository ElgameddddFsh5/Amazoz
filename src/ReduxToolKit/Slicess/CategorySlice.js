import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// const CategoryUrl = "https://fakestoreapi.com/products/categories";
const CategoryUrl = "https://mocki.io/v1/041f4fdb-407a-4826-81ba-d7bfdf022693";

export const FetchCategory = createAsyncThunk(
  "CategorySlice/FetchCategory",
  async () => {
    const res = await fetch(CategoryUrl);
    const data = await res.json();
    return data;
  }
);

const CategorySlice = createSlice({
  initialState: [],
  name: "CategorySlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchCategory.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = CategorySlice.actions;
export default CategorySlice.reducer;
