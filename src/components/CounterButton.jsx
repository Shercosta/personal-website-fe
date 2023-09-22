// CounterButtons.js
import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, checkContent } from "../app/store";

const CounterButtons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => checkContent()}>What's in there?</button>
    </div>
  );
};

export default CounterButtons;
