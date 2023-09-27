import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaRocket, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineContentCopy } from "react-icons/md";

const Contact = () => {
  const [visibility, setVisibility] = useState("contact-details opacity-0");
  const [details, setDetails] = useState("");

  const visibilityClick = () => {
    setVisibility("contact-details opacity-100");
  };

  const whatsappClick = () => {
    setDetails("(+62)895633390106");
  };

  const emailClick = () => {
    setDetails("punchsupersaga@gmail.com");
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
            </div>
            <div className="col-sm-12 col-md-12 col-lg-5 hr-box">
              <hr className="hr-middle" />
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
