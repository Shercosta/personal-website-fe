import React from "react";
import CarouselSection from "./CarouselSection";

function Work() {
  const carouselContents = [
    {
      image:
        "https://e7.pngegg.com/pngimages/960/556/png-clipart-new-york-city-silhouette-building-cityscape-cool-urban-miscellaneous-city.png",
      label: "First Project Label",
      caption:
        "Daniel, bersama dengan teman-temannya, Adrian dan Doyle, menculik seorang pengusaha kaya dengan tujuan memerasnya. Namun, rencana tersebut malah menjadi bumerang akibat kebodohan mereka sendiri.",
    },
    {
      image:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/01/104228210.jpg",
      label: "Second Project Properties",
      caption:
        "An exiled anxiety-ridden homebody must battle an alien who's found its way into her home.",
    },
  ];

  return (
    <>
      <CarouselSection contents={carouselContents} />
    </>
  );
}

export default Work;
