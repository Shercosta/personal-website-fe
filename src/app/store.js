import { configureStore, createSlice } from "@reduxjs/toolkit";

// define slice (reducer, initiaal state, and actions)
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    incrementByAmount: (state, action) => {
      state += action.payload;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const checkContent = () => {
  console.log(counterSlice);
};
export default store;
