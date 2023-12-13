import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null as string | null,
};

export const productsFetching = createAsyncThunk(
  "products/productsFetching",
  async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
    );
    return res.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetching.pending, (state, action) => {
      state.status = "pending";
    });

    builder.addCase(productsFetching.fulfilled, (state, action) => {
      state.status = "";
      state.items = action.payload;
    });

    builder.addCase(productsFetching.rejected, (state, action) => {
      state.status = "Something went wrong!";
    });
  },
});

export default productsSlice.reducer;
