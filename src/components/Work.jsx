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
              $oid: "6514c45ce4c70ca8fed84818",
            },
            label: "Tindog: A Tinder for your Dog!",
            caption:
              "Sniff sniff! You can meet interesting dogs nearby with ease!",
            link: "https://shercosta.github.io/TinDog/",
            image: "https://i.ibb.co/2Zb61hJ/Tindog.png",
          },
          {
            label: "Portfolio for ikamhd",
            caption: "Her Professional Portofolio",
            image: "https://i.ibb.co/Mcmn5LN/ikamhd.png",
            link: "https://ikamhd.github.io/portofolio/",
          },
          {
            _id: {
              $oid: "6518fb16fe17b90533aafb90",
            },
            label: "Make your travel wish come true!",
            caption:
              "Agensi Tour terpercaya di Indonesia dengan semua promonya!",
            link: "https://warawiritravel.github.io/warawiriweb/",
            image: "https://i.ibb.co/Ntz7MnS/warawiri.png",
            __v: 0,
          },
          {
            _id: {
              $oid: "651625d5a816695eb5c62165",
            },
            label: "Keeper App will keep you posted.",
            caption: "Need a quick Post-It note? Let me do that for you!",
            link: "https://3pvpbi.csb.app/",
            image: "https://i.ibb.co/4432MkC/keeper.png",
            __v: 0,
          },
          {
            _id: {
              $oid: "6518fb16fe17b90533aafb90",
            },
            label: "Quick To Do List!",
            caption: "Do you want me to keep ahold of some tasks for you?",
            link: "https://g413ud.csb.app/",
            image: "https://i.ibb.co/kKWdy84/todolist.png",
            __v: 0,
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
