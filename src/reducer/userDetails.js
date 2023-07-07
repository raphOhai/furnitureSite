import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  email: "",
  address: "",
};
const UserDetailsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveName(state, action) {
      state.name = action.payload;
    },
    saveEmail(state, action) {
      state.email = action.payload;
    },
    saveAddress(state, action) {
      state.address = action.payload;
    },
  },
});
export const { saveName, saveEmail, saveAddress } = UserDetailsSlice.actions;
export default UserDetailsSlice.reducer;
