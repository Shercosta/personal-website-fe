import { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineContentCopy } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const [copied, setCopied] = useState("");

  const copy = (value) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <Container className="py-5">
      <Fade>
        <h1 className="fw-bold mb-2">Get in Touch</h1>
        <p className="text-soft mb-5" style={{ maxWidth: 600 }}>
          Want to collaborate, hire me, or just talk tech? You can reach me
          directly through the channels below.
        </p>
      </Fade>

      <div className="row g-4">
        {/* WhatsApp */}
        <div className="col-md-6">
          <Fade direction="up">
            <Card className="h-100 border-0 shadow-sm rounded-4 bg-body">
              <Card.Body className="p-4 d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <FaWhatsapp size={28} />
                  <h5 className="mb-0 fw-semibold">WhatsApp</h5>
                </div>

                <p className="text-soft mb-0">(+62) 895 3330 79571</p>

                <button
                  className="btn btn-outline-secondary align-self-start"
                  onClick={() => copy("(+62)895333079571")}
                >
                  <MdOutlineContentCopy className="me-2" />
                  Copy number
                </button>
              </Card.Body>
            </Card>
          </Fade>
        </div>

        {/* Email */}
        <div className="col-md-6">
          <Fade direction="up" delay={150}>
            <Card className="h-100 border-0 shadow-sm rounded-4 bg-body">
              <Card.Body className="p-4 d-flex flex-column gap-3">
                <div className="d-flex align-items-center gap-3">
                  <MdOutlineEmail size={28} />
                  <h5 className="mb-0 fw-semibold">Email</h5>
                </div>

                <p className="text-soft mb-0">shercostagp@gmail.com</p>

                <button
                  className="btn btn-outline-secondary align-self-start"
                  onClick={() => copy("shercostagp@gmail.com")}
                >
                  <MdOutlineContentCopy className="me-2" />
                  Copy email
                </button>
              </Card.Body>
            </Card>
          </Fade>
        </div>
      </div>

      {copied && (
        <Fade>
          <p className="mt-4 text-success fw-medium">Copied to clipboard ✔</p>
        </Fade>
      )}
    </Container>
  );
};

export default Contact;
