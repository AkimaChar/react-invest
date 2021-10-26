import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    isAuth: !!localStorage.getItem("access token"),
  },
  reducers: {
    logIn: state => {
      state.isAuth = true;
    },
    logOut: state => {
      localStorage.removeItem("access token");
      state.data = null;
      state.isAuth = false;
    },
    updateUserData: (state, { payload }) => {
      state.data = payload;
    },
    updateUserAvatar: (state, { payload }) => {
      state.data.avatar = payload;
    },
  },
});

const userReducer = userSlice.reducer;
export const { logIn, logOut, updateUserData, updateUserAvatar } =
  userSlice.actions;
export default userReducer;
