import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaRocket, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const [visibility, setVisibility] = useState("contact-details invisible");
  //   let alertVisibility = "invisible";
  //   let alertClass = `contact-details ${alertVisibility}`;

  const handleClick = () => {
    setVisibility("contact-details visible");
  };
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
            <div className="col-sm-12 col-md-12 col-lg-5 hr-box">
              <hr className="hr-middle" />
            </div>
            <div className="col-sm-12 col-lg-2">
              <p className="contact-p">
                <FaWhatsapp onClick={handleClick} />
                <span className="contact-icon" />
                <MdOutlineEmail />
              </p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 hr-box">
              <hr className="hr-middle" />
            </div>
          </div>
          <div className={visibility}>
            <div class="alert alert-info" role="alert">
              A simple info alert—check it out!
            </div>
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default Contact;
