import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FetchProductsDetails = createAsyncThunk(
  "productsDetailsSlice/fetchProductsDetails",
  async (ApiUrl) => {
    const res = await fetch(ApiUrl);
    const data = await res.json();
    return data;
  }
);

const productsDetailsSlice = createSlice({
  initialState: [],
  name: "productsDetailsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchProductsDetails.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = productsDetailsSlice.actions;
export default productsDetailsSlice.reducer;
