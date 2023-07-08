import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchQuery: "",
  searchResults: [],
  searchResultPage: "",
};
const ProductSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    saveSearchResults(state, action) {
      state.searchResults = action.payload;
    },
    saveSearchResultsPage(state, action) {
      state.searchResultPage = action.payload;
    },
    apendSearchResults(state, action) {
      const arr2 = state.searchResults.products.concat(action.payload);
      state.searchResults.products = arr2;
    },
  },
});
export const {
  saveSearchQuery,
  saveSearchResults,
  saveSearchResultsPage,
  apendSearchResults,
} = ProductSlice.actions;
export default ProductSlice.reducer;
