import { Container, Card, Badge } from "react-bootstrap";
import { FaGithub, FaFileLines } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import LogoCarousel from "./LogoCarousel";
import LogoSlider from "./LogoSlider";

const Home = () => {
  return (
    <>
      {/* IDENTITY CARD */}
      <Container className="py-5">
        <Fade>
          <Card className="border-0 shadow-sm rounded-4">
            <Card.Body className="p-4 p-md-5">
              <Badge bg="secondary" className="mb-3">
                Full-stack Developer
              </Badge>

              <h1 className="fw-bold mb-2">Shercosta</h1>

              <p className=" fs-5 mb-4" style={{ maxWidth: 700 }}>
                I build reliable web and software systems with clean
                architecture, strong fundamentals, and real-world production
                experience.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <a
                  href="https://github.com/Shercosta"
                  target="_blank"
                  className="btn btn-outline-secondary"
                >
                  <FaGithub className="me-2" />
                  GitHub
                </a>

                <a
                  href="https://docs.google.com/document/d/1gzECrr1WiWP0h8FK6lwOvex1rZfxPgiY6sU7ZXF9WPw/edit?usp=sharing"
                  target="_blank"
                  className="btn btn-outline-secondary"
                >
                  <FaFileLines className="me-2" />
                  CV
                </a>

                <Link
                  to="/experience"
                  className="btn btn-secondary text-decoration-none"
                >
                  View Experience
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Fade>
      </Container>

      {/* BIO + IMAGE */}
      <Container className="pb-5">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <Fade direction="up">
              <h3 className="fw-semibold mb-3">Background</h3>
              <p className="">
                I hold a bachelor’s degree in Computer Science and currently
                work as a Full-stack Developer at{" "}
                <a
                  href="https://www.btn.co.id/id"
                  target="_blank"
                  className="text-reset fw-medium"
                >
                  PT Bank Tabungan Negara
                </a>{" "}
                via{" "}
                <a
                  href="https://deptechdigital.com/"
                  target="_blank"
                  className="text-reset fw-medium"
                >
                  PT Deptech Digital Indonesia
                </a>
                .
              </p>

              <p className="">
                I focus on building systems that are easy to maintain, scale,
                and reason about — not just things that look good in demos.
              </p>
            </Fade>
          </div>

          <div className="col-md-6 text-center">
            <Fade>
              <img
                src="https://raw.githubusercontent.com/Shercosta/personal-website-fe/refs/heads/main/public/self-vesperia.png"
                alt="Shercosta"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: 360 }}
              />
            </Fade>
          </div>
        </div>
      </Container>

      {/* SERVICES */}
      <Container className="pb-5">
        <Fade>
          <h3 className="fw-semibold mb-4">What I Build</h3>

          <div className="row g-4">
            {[
              {
                title: "Frontend",
                desc: "Accessible, responsive interfaces using modern JS frameworks.",
              },
              {
                title: "Backend",
                desc: "APIs, databases, and business logic built for production.",
              },
              {
                title: "Full-stack Systems",
                desc: "End-to-end solutions with clean architecture.",
              },
              {
                title: "Software Development",
                desc: "Tools and systems beyond the browser.",
              },
            ].map((item) => (
              <div className="col-md-6" key={item.title}>
                <Card className="h-100 border-0 shadow-sm rounded-4">
                  <Card.Body>
                    <h5 className="fw-semibold">{item.title}</h5>
                    <p className=" mb-0">{item.desc}</p>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Fade>
      </Container>

      {/* TECH STACK */}
      <Container className="pb-5">
        <Fade>
          <h3 className="fw-semibold mb-3">Tools I Use in Production</h3>
          <LogoSlider />
        </Fade>
      </Container>
    </>
  );
};

export default Home;
