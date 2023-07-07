import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  searchQuery: "",
  searchResults: [],
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
  },
});
export const { saveSearchQuery, saveSearchResults } = ProductSlice.actions;
export default ProductSlice.reducer;
