import { createSlice } from "@reduxjs/toolkit";

const navbarHeightSlice = createSlice({
  name: "navbarHeight",
  initialState: "",
  reducers: {
    getHeight: (state) => {
      return state;
    },
  },
});

export const { getHeight } = navbarHeightSlice.actions;
