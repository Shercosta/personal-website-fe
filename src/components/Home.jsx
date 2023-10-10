import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaFileLines } from "react-icons/fa6";
import ScrollReveal from "scrollreveal";

const Home = () => {
  const splashBackground =
    "https://static.vecteezy.com/system/resources/previews/016/539/782/original/watercolor-splash-background-png.png";

  const portraitBackground = {
    backgroundImage: `url(${splashBackground})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  const navBar = document.getElementsByClassName("navbar");

  return (
    <>
      <Container>
        <div className="middle ">
          <h4>Hi There! I am</h4>
          <h1>Shercosta</h1>
        </div>
      </Container>
      <Container>
        <div className="row">
          <div className="col-md-4 order-1 order-md-0">
            <div className="">
              <h1>Services</h1>
              <p>
                I provide Web Development (FrontEnd, BackEnd, or FullStack). I
                also provide Software Development services.
              </p>
            </div>
            <div className="">
              <h1>Bio</h1>
              <p>
                I love problem solving. I take my programming work as a
                challenge to have fun and to work!
              </p>
            </div>
          </div>

          <div
            className="col-md-4 order-0 order-md-0"
            style={portraitBackground}
          >
            <img
              src="https://i.ibb.co/9W8d13T/Shercosta-portrait.png"
              alt="Shercosta Light"
              className="self-picture rounded shadow"
            />
          </div>

          <div className="col-md-4 order-2 order-md-0 ">
            <div className="ms-auto">
              <h3>
                <a
                  href="https://github.com/Shercosta"
                  className="text-reset text-decoration-none"
                  target="_blank"
                >
                  <FaGithub /> My Github Repo
                </a>
              </h3>
            </div>
            <div className="ms-auto">
              <h3>
                <a
                  href="https://docs.google.com/document/d/1_8PZwEQhrhG4XrR_fEkIG2JK63wL0LGm/edit?usp=sharing&ouid=117151097863225007753&rtpof=true&sd=true"
                  className="text-reset text-decoration-none"
                  target="_blank"
                >
                  <FaFileLines /> Here's My CV
                </a>
              </h3>
            </div>
          </div>
        </div>
      </Container>
      {ScrollReveal().reveal(".middle")}
    </>
  );
};

export default Home;
