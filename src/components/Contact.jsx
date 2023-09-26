import React from "react";
import { Container } from "react-bootstrap";
import { FaRocket, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <Container>
      <div className="center-screen d-flex align-items-center text-center">
        <Container>
          <div className="row">
            <div>
              <h1>
                Let's Connect and Create Digital Magic! <FaRocket />
                <br />
                Your Future Fullstack Web Developer Awaits.
              </h1>
            </div>
            <div className="col hr-box">
              <hr className="hr-middle" />
            </div>
            <div className="col-1">
              <p className="contact-p">
                <FaWhatsapp />
              </p>
            </div>
            <div className="col-1">
              <p className="contact-p">
                <MdOutlineEmail />
              </p>
            </div>
            <div className="col hr-box">
              <hr className="hr-middle" />
            </div>
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default Contact;
