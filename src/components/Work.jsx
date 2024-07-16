import React, { useEffect, useState } from "react";
import CarouselSection from "./CarouselSection";
import Post from "./Post";

function Work() {
  const [projects, setProjects] = useState([]);
  const [showPost, setShowPost] = useState(false);

  useEffect(() => {
    fetch("https://personal-website-be-8d1338a42b80.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);

        const delay = 1000;
        setTimeout(() => {
          setShowPost(true);
        }, delay);
      })
      .catch((error) => {
        let products = [
          {
            _id: {
              $oid: "sapambakita",
            },
            label: "Sapa Mbak Ita",
            caption:
              "Maintainer for Semarang public complaint service for admin sites. Responsible for new features and bug fixes.",
            image: "https://i.imgur.com/RDQak7D.png",
          },
          {
            _id: {
              $oid: "lavees",
            },
            label: "Lavees Cosmedics",
            caption:
              "Engineered features for Lavees beauty clinic admin website. Payment feature, bug fixes, etc.",
            image: "https://i.imgur.com/JKWkWSJ.png",
          },
          {
            _id: {
              $oid: "ptsmi",
            },
            label: "PT Sarana Multi Infrastruktur",
            caption:
              "Engineer new features for PT Sarana Multi Infrastruktur. User management, internal.",
            image: "https://i.imgur.com/zDGukVh.png",
          },
          {
            _id: {
              $oid: "idx",
            },
            label: "Indonesia Stock Exchange",
            caption:
              "A part of team that developed site for Indonesia Stock Exchange.",
            // image: "https://i.imgur.com/zDGukVh.png",
          },
        ];

        setProjects(products);
        setShowPost(true);
      });
  }, []);

  return (
    <>
      <CarouselSection contents={projects} />
      {showPost && <Post />}
    </>
  );
}

export default Work;
