import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    value: null,
  },
  reducers: {
    updateToken: (state, action) => {
      state.value = action.payload;
    },
    removeToken: (state) => {
      state.value = null;
    },
  },
});

export const { updateToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
