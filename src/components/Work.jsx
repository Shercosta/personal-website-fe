import React, { useEffect, useState } from "react";
import CarouselSection from "./CarouselSection";
import Post from "./Post";

function Work() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://personal-website-be-8d1338a42b80.herokuapp.com/")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => {
        let products = [
          {
            _id: {
              $oid: "6518fb16fe17b90533aafb90",
            },
            label: "Make your travel wish come true!",
            caption:
              "Agensi Tour terpercaya di Indonesia dengan semua promonya!",
            link: "https://warawiritravel.github.io/warawiriweb/",
            image:
              "https://media.discordapp.net/attachments/1157122579706937394/1187815974649462855/image.png?ex=659842d4&is=6585cdd4&hm=6f21ec79cf2ad0a39a46b606195be48e02037e468566c7ad100db50af9d4335d&=&format=webp&quality=lossless&width=1116&height=657",
            __v: 0,
          },
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
            _id: {
              $oid: "651625d5a816695eb5c62165",
            },
            label: "Keeper App will keep you posted.",
            caption: "Need a quick Post-It note? Let me do that for you!",
            link: "https://3pvpbi.csb.app/",
            image:
              "https://cdn.discordapp.com/attachments/1157122579706937394/1157122605426417674/image0.png?ex=651775e7&is=65162467&hm=28d860bf5e133bebfea64fb334ba9284091d34093800b8ae660c653a0d51e63c&",
            __v: 0,
          },
          {
            _id: {
              $oid: "6518fb16fe17b90533aafb90",
            },
            label: "Quick To Do List!",
            caption: "Do you want me to keep ahold of some tasks for you?",
            link: "https://g413ud.csb.app/",
            image:
              "https://cdn.discordapp.com/attachments/1157122579706937394/1157174080118739004/Screenshot_2023_0929_113620.png?ex=651a48d7&is=6518f757&hm=e47e15bef905132219b050d3e7d838767b4b1059423efd00e8ffe97af790d3b4&",
            __v: 0,
          },
          {
            label: "Portfolio for ikamhd",
            caption: "Her Professional Portofolio",
            image:
              "https://media.discordapp.net/attachments/1188516240650665994/1188516547640168448/image.png?ex=659acf4a&is=65885a4a&hm=afb601c11fb444e793a48b1c3e15d033ec7acba7634f4058f3d83bd70b436672&=&format=webp&quality=lossless&width=674&height=504",
            link: "https://ikamhd.github.io/portofolio/",
          },
        ];

        setProjects(products);
      });
  }, []);

  return (
    <>
      {/* {console.log(projects)} */}
      <CarouselSection contents={projects} />
      <Post />
    </>
  );
}

export default Work;
