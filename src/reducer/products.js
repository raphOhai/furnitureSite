import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  productsItems: [],
};
const ProductSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveProducts(state, action) {
      state.productsItems = action.payload;
    },
  },
});
export const { saveProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
