import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../store";

function TryComp() {
  // Use useSelector to access the theme state
  const theme = useSelector((state) => state);

  // Use useDispatch to access the dispatch function
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    // Dispatch the toggle action to update the theme state
    dispatch(toggle());
  };

  const themeString = String(theme);

  return (
    <div>
      <h1>Current Theme: {themeString}</h1>
      <button onClick={handleToggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default TryComp;
