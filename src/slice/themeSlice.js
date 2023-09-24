import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "light",
  reducers: {
    toggle: (state) => {
      return state === "light" ? "dark" : "light";
      //   if (state === "light") {
      //     console.log(state);
      //     return "dark";
      //   } else {
      //     console.log(state);
      //     return "light";
      //   }
    },
  },
});

export const { toggle } = themeSlice.actions;
