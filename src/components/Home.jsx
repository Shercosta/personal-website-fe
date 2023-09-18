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
                <FaGithub /> My Github Repo
              </h3>
            </div>
            <div className="ms-auto">
              <h3>
                <FaFileLines /> Here's My CV
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
