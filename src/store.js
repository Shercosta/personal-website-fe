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
    storeHeight: (state, action) => {
      state = action.payload;
    },
    getHeight: (state) => {
      return state;
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
export const { storeHeight, getHeight } = navHeightSlice.actions;
export default store;
