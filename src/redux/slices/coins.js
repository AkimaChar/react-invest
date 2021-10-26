import { createSlice } from "@reduxjs/toolkit";

const coinsSlice = createSlice({
  name: "coins",
  initialState: {
    coins: [],
  },
  reducers: {
    updateCoins: (state, { payload }) => {
      state.coins = payload;
    },
  },
});

const coinsReducer = coinsSlice.reducer;
export const { updateCoins } = coinsSlice.actions;
export default coinsReducer;
