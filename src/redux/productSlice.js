import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const setproducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    searchQuery: "",
    status: "idle",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setproducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setproducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(setproducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setSearchQuery } = productSlice.actions;
export default productSlice.reducer;
