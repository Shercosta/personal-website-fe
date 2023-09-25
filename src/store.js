import { configureStore, createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: "dark",
  reducers: {
    toggle: (state) => {
      return state === "dark" ? "light" : "dark";
    },
  },
});

const rootReducer = {
  themeSlice: themeSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export const { toggle } = themeSlice.actions;
export default store;
