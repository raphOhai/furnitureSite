import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  productsItems: [],
  PrductPage: "",
};
const ProductSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveProducts(state, action) {
      state.productsItems = action.payload;
    },
    saveProductPage(state, action) {
      state.PrductPage = action.payload;
    },
    apendProducts(state, action) {
      const arr2 = state.productsItems.concat(action.payload);
      state.productsItems = arr2;
    },
  },
});
export const { saveProducts, saveProductPage, apendProducts } = ProductSlice.actions;
export default ProductSlice.reducer;
