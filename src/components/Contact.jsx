import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaRocket, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineContentCopy } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const [visibility, setVisibility] = useState("contact-details opacity-0");
  const [details, setDetails] = useState("");

  const visibilityClick = () => {
    setVisibility("contact-details opacity-100");
  };

  const whatsappClick = () => {
    setDetails("(+62)895333079571");
  };

  const emailClick = () => {
    setDetails("punchsupersaga@gmail.com");
  };

  return (
    <Container>
      <div className="center-screen d-flex align-items-center text-center">
        <Container>
          <div className="row">
            <Fade direction="up">
              <div>
                <h1>
                  Let's Connect and Create Digital Magic! <FaRocket />
                  <br />
                  Your Future Fullstack Web Developer Awaits.
                </h1>
              </div>
            </Fade>
            <div className="col-sm-12 col-md-12 col-lg-5 hr-box">
              <Container>
                <Fade direction="right" delay={500}>
                  <hr className="hr-middle" />
                </Fade>
              </Container>
            </div>
            <div className="col-sm-12 col-lg-2">
              <Fade delay={1000}>
                <p className="contact-p">
                  <FaWhatsapp
                    onClick={() => {
                      whatsappClick();
                      visibilityClick();
                    }}
                  />
                  <span className="contact-icon" />
                  <MdOutlineEmail
                    onClick={() => {
                      emailClick();
                      visibilityClick();
                    }}
                  />
                </p>
              </Fade>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 hr-box">
              <Container>
                <Fade direction="left" delay={500}>
                  <hr className="hr-middle" />
                </Fade>
              </Container>
            </div>
          </div>
          <div className={visibility}>
            <div className="alert alert-info" role="alert">
              {details}{" "}
              <MdOutlineContentCopy
                onClick={() => navigator.clipboard.writeText(details)}
              />
            </div>
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default Contact;
