import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: false,
};

const ShoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    getProductsSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.products = payload.data;
    },

    fetchProductsFail:(state)=>{
        state.loading = false
        state.error = true
    }
  },
});

export const { fetchProductsStart, getProductsSuccess, fetchProductsFail } = ShoppingSlice.actions;

export default ShoppingSlice.reducer;
