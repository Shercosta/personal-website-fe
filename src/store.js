import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const store = configureStore({
  reducer: themeSlice.reducer,
});

export const { toggle } = themeSlice.actions;
export default store;
