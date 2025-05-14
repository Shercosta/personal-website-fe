import React, { useEffect, useState } from "react";
import CarouselSection from "./CarouselSection";
import Post from "./Post";
import projects from "../arrays/project";

function Work() {
  const [imProjects, setProjects] = useState(projects);
  const [showPost, setShowPost] = useState(true);

  // not used due to no backend host
  // useEffect(() => {
  //   fetch("https://personal-website-be-8d1338a42b80.herokuapp.com/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProjects(data);

  //       const delay = 1000;
  //       setTimeout(() => {
  //         setShowPost(true);
  //       }, delay);
  //     })
  //     .catch((error) => {
  //       setProjects(projects);
  //       setShowPost(true);
  //     });
  // }, []);

  return (
    <>
      <CarouselSection contents={imProjects} />
      {showPost && <Post />}
    </>
  );
}

export default Work;
