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
      state.data.portfolio.deals = state.data.portfolio.deals
        .sort((a, b) => {
          return new Date(b.created) - new Date(a.created);
        })
        .reverse();
    },
    updateUserAvatar: (state, { payload }) => {
      state.data.avatar = payload;
    },
    updateUserDeals: (state, { payload }) => {
      state.data.portfolio.deals.push(payload);
      state.data.portfolio.deals = state.data.portfolio.deals
        .sort((a, b) => {
          return new Date(b.created) - new Date(a.created);
        })
        .reverse();
    },
  },
});

const userReducer = userSlice.reducer;
export const {
  logIn,
  logOut,
  updateUserData,
  updateUserAvatar,
  updateUserDeals,
} = userSlice.actions;
export default userReducer;
