import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async (ApiUrl) => {
    const res = await fetch(ApiUrl);
    const data = await res.json();
    return data;
  }
);

const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
