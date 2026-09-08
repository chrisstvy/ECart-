import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch products from DummyJSON API
export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
  const result = await axios.get("https://dummyjson.com/products");
  // Fix 1: Axios stores payload in result.data
  return result.data.products; 
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    allProducts: [],
    error: ""
  },
  reducers: {},
  // Fix 2: Handle pending, fulfilled, and rejected states for async operations
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.allProducts = action.payload;
      state.error = "";
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.allProducts = [];
      state.error = "Failed to fetch products. Please try again later.";
    });
  }
});

// Fix 3: Export the reducer as the default export for cartStore.js
export default productSlice.reducer;