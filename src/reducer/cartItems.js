import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  itemsInCart: [],
  total: "",
  CartCount: "",
};
const CartItemSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveCartItems(state, action) {
      state.itemsInCart = action.payload;
      state.CartCount = state.itemsInCart.length;
      state.total = state.itemsInCart.reduce(
        (a, c) => a + c.price * c.count.reduce((a, c) => a + c, 0),
        0
      );
    },

    inscreaseItemCount(state, action) {
      const newItemId = action.payload._id;
      const existingItem = state.itemsInCart.find(
        (item) => item._id === newItemId
      );
      if (existingItem) {
        existingItem.count.push(1);
      }
    },
    decreaseItemCountInCart(state, action) {
      const newItemId = action.payload._id;
      const existingItem = state.itemsInCart.find(
        (item) => item._id === newItemId
      );
      if (existingItem) {
        if (existingItem.count.reduce((a, c) => a + c, 0) < 2) {
          return;
        } else {
          existingItem.count.push(-1);
        }
      }
    },
    deleteItemIncart(state, action) {
      const new_array = state.itemsInCart.filter(function (value) {
        return value._id !== action.payload._id;
      });
      state.itemsInCart = new_array;
    },
    updateCartCount(state, action) {
      state.CartCount = action.payload
    },
  },
});
export const {
  saveCartItems,
  decreaseItemCountInCart,
  inscreaseItemCount,
  deleteItemIncart,
  updateCartCount
} = CartItemSlice.actions;
export default CartItemSlice.reducer;
