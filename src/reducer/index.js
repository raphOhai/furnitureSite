import { configureStore } from "@reduxjs/toolkit";
import products from "./products";
import cartItems from "./cartItems";
import userDetails from "./userDetails";
import searchItems from "./searchItems";
const store = configureStore({
  reducer: {
    products,
    cartItems,
    userDetails,
    searchItems
  },
});

export default store;
