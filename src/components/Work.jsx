import React from "react";
import CarouselSection from "./CarouselSection";
import { useDispatch, useSelector } from "react-redux";
import { getHeight, storeHeight } from "../store";

function Work() {
  const height = useSelector((state) => state.navHeightSlice);
  const dispatch = useDispatch();

  const getNavbarHeight = (size) => {
    dispatch(storeHeight(size));
  };

  const nav = document.getElementsByClassName("navbar");
  setTimeout(() => {
    const navHeight = nav[0].offsetHeight;
    getNavbarHeight(navHeight);
  }, 500);

  return (
    <>
      <CarouselSection />
      <button onClick={dispatch(getHeight())}>Height is {height}</button>
    </>
  );
}

export default Work;
