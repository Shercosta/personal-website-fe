import React from "react";
import CarouselSection from "./CarouselSection";
import { useDispatch, useSelector } from "react-redux";
import { getHeight } from "../store";

function Work() {
  const height = useSelector((state) => state.navHeightSlice);
  const dispatch = useDispatch();

  const nav = document.getElementsByClassName("navbar");
  setTimeout(() => {
    const navHeight = nav[0].offsetHeight;
    console.log(navHeight);
  }, 500);

  return <CarouselSection />;
}

export default Work;
