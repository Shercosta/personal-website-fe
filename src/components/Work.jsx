import React, { useEffect, useState } from "react";
import CarouselSection from "./CarouselSection";

function Work() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://personal-website-be-8d1338a42b80.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {/* {console.log(projects)} */}
      <CarouselSection contents={projects} />
    </>
  );
}

export default Work;
