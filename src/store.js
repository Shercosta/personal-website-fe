import { configureStore, createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "dark",
  reducers: {
    toggle: (state) => {
      return state === "dark" ? "light" : "dark";
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

const navHeightSlice = createSlice({
  name: "navHeight",
  initialState: 0,
  reducers: {
    getHeight: (state) => {
      state = 88;
    },
  },
});

const rootReducer = {
  themeSlice: themeSlice.reducer,
  navHeightSlice: navHeightSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export const { toggle } = themeSlice.actions;
export const { getHeight } = navHeightSlice.actions;
export default store;
