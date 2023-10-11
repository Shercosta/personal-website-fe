import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaFileLines } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const splashBackground =
    "https://static.vecteezy.com/system/resources/previews/016/539/782/original/watercolor-splash-background-png.png";

  const portraitBackground = {
    backgroundImage: `url(${splashBackground})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <Container>
        <div className="middle">
          <Fade>
            <h4>Hi There! I am</h4>
            <h1>Shercosta</h1>
          </Fade>
        </div>
      </Container>
      <Container>
        <Fade>
          <div className="row">
            <div className="col-md-4 order-1 order-md-0">
              <div>
                <Fade direction="up">
                  <h1>Services</h1>
                  <p>
                    I provide Web Development (FrontEnd, BackEnd, or FullStack).
                    I also provide Software Development services.
                  </p>
                </Fade>
              </div>
              <div>
                <Fade direction="up">
                  <h1>Bio</h1>
                  <p>
                    I love problem solving. I take my programming work as a
                    challenge to have fun and to work!
                  </p>
                </Fade>
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
                <Fade direction="up">
                  <h3>
                    <a
                      href="https://github.com/Shercosta"
                      className="text-reset text-decoration-none"
                      target="_blank"
                    >
                      <FaGithub /> My Github Repo
                    </a>
                  </h3>
                </Fade>
              </div>
              <div className="ms-auto">
                <Fade direction="up">
                  <h3>
                    <a
                      href="https://docs.google.com/document/d/1_8PZwEQhrhG4XrR_fEkIG2JK63wL0LGm/edit?usp=sharing&ouid=117151097863225007753&rtpof=true&sd=true"
                      className="text-reset text-decoration-none"
                      target="_blank"
                    >
                      <FaFileLines /> Here's My CV
                    </a>
                  </h3>
                </Fade>
              </div>
            </div>
          </div>
        </Fade>
      </Container>
    </>
  );
};

export default Home;
