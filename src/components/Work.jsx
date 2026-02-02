import { useState } from "react";
import projects from "../arrays/project";
import FeaturedWork from "./FeaturedWork";
import CaseStudies from "./CaseStudies";

function Work() {
  const [imProjects, _] = useState(
    projects.filter((project) => project.highlight),
  );
  const [showPost, __] = useState(true);

  return (
    <>
      <FeaturedWork projects={imProjects} />
      {showPost && <CaseStudies />}
    </>
  );
}

export default Work;
