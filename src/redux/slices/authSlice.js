import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.role = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.role = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
