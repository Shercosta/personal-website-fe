import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaFileLines } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <Container>
        <div className="middle">
          <p>Hi There! I'm</p>
          <h1>Shercosta</h1>
        </div>
      </Container>
      <Container>
        <div className="row">
          <div className="col-md-4 order-1 order-md-0">
            <div>
              <h1>Services</h1>
              <p>
                I provide Web Development (FrontEnd, BackEnd, or FullStack). I
                also provide Software Development services.
              </p>
            </div>
            <div>
              <h1>Bio</h1>
              <p>
                I love problem solving. I take my programming work as a
                challenge to have fun and to work!
              </p>
            </div>
          </div>

          <div className="col-md-4 order-0 order-md-0">
            <img
              src="https://i.ibb.co/f9hTD9p/Comp-1-0-00-00-00.png"
              alt="Shercosta Light"
              className="self-picture"
            />
          </div>

          <div className="col-md-4 order-2 order-md-0">
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
    </>
  );
};

export default Home;
