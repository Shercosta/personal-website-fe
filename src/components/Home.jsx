import { Container, Card, Badge } from "react-bootstrap";
import { FaGithub, FaFileLines } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import LogoSlider from "./LogoSlider";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>
          Geizka Rozilia Ruicosta (Shercosta) – Fullstack Software Engineer
        </title>

        <meta
          name="description"
          content="Geizka Rozilia Ruicosta (Shercosta) is a Fullstack Software Engineer with experience building scalable web, mobile, and backend systems using React, Vue, Node.js, Laravel, Go, and Docker."
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Geizka Rozilia Ruicosta (Shercosta) – Fullstack Software Engineer"
        />
        <meta
          property="og:description"
          content="Fullstack Software Engineer with real-world production experience in enterprise, fintech, and business systems."
        />
        <meta property="og:url" content="https://shercosta.netlify.app/" />
        <meta
          property="og:image"
          content="https://shercosta.netlify.app/og.png"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Geizka Rozilia Ruicosta (Shercosta) – Fullstack Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Building scalable, maintainable software systems across frontend, backend, and cloud environments."
        />
        {/* JSON-LD Person schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Geizka Rozilia Ruicosta",
            alternateName: ["Shercosta", "Geizka Ruicosta"],
            url: "https://shercosta.netlify.app",
            image: "https://shercosta.netlify.app/og.png",
            jobTitle: "Full-stack Software Engineer",
            sameAs: [
              "https://github.com/Shercosta",
              "https://www.linkedin.com/in/geizka-ruicosta-5a3620144/",
            ],
          })}
        </script>
      </Helmet>

      {/* IDENTITY CARD */}
      <Container className="py-5">
        <Fade>
          <Card className="border-0 shadow-sm rounded-4">
            <Card.Body className="p-4 p-md-5">
              <Badge bg="secondary" className="mb-3">
                Fullstack Software Engineer
              </Badge>

              <h1 className="fw-bold mb-2">Geizka Rozilia Ruicosta, S.Kom.</h1>
              <p className="text-muted fs-6 mb-4">
                also known as <b>Shercosta</b>
              </p>

              <p className="fs-5 mb-4" style={{ maxWidth: 720 }}>
                A goal-driven Software Engineer with professional experience
                designing, developing, and maintaining full-stack systems — from
                frontend interfaces to backend services and APIs — built for
                real-world production use.
              </p>

              <div className="d-flex gap-3 flex-wrap">
                <a
                  href="https://github.com/Shercosta"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-secondary"
                >
                  <FaGithub className="me-2" />
                  GitHub
                </a>

                <a
                  href="https://docs.google.com/document/d/1gzECrr1WiWP0h8FK6lwOvex1rZfxPgiY6sU7ZXF9WPw/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
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

              <p>
                I hold a Bachelor’s degree in Computer Science and currently
                work as a <strong>Fullstack Developer</strong> at{" "}
                <a
                  href="https://www.btn.co.id/id"
                  target="_blank"
                  rel="noreferrer"
                  className="text-reset fw-medium"
                >
                  PT Bank Tabungan Negara (Persero) Tbk
                </a>{" "}
                via{" "}
                <a
                  href="https://deptechdigital.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-reset fw-medium"
                >
                  PT Deptech Digital Indonesia
                </a>
                .
              </p>

              <p>
                My experience spans frontend and backend development, API
                integration, database design, and cloud-ready architectures,
                including microservices and containerized environments using
                Docker.
              </p>

              <p className="mb-0">
                I care deeply about code quality, maintainability, and systems
                that can scale alongside business growth — not just features
                that work today.
              </p>
            </Fade>
          </div>

          <div className="col-md-6 text-center">
            <Fade>
              <img
                src="https://raw.githubusercontent.com/Shercosta/personal-website-fe/refs/heads/main/public/self-vesperia.png"
                alt="Geizka Rozilia Ruicosta (Shercosta)"
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
          <h3 className="fw-semibold mb-4">What I Work On</h3>

          <div className="row g-4">
            {[
              {
                title: "Frontend Engineering",
                desc: "Modern, accessible user interfaces using React and Vue.",
              },
              {
                title: "Backend Engineering",
                desc: "APIs, databases, and business logic built for reliability.",
              },
              {
                title: "Fullstack Systems",
                desc: "End-to-end solutions from UI to database and deployment.",
              },
              {
                title: "Enterprise & Business Software",
                desc: "Internal tools, CMS, and large-scale applications.",
              },
              {
                title: "Team & Technical Leadership",
                desc: "Leading developers, reviewing code, and shaping architecture.",
              },
            ].map((item) => (
              <div className="col-md-6" key={item.title}>
                <Card className="h-100 border-0 shadow-sm rounded-4">
                  <Card.Body>
                    <h5 className="fw-semibold">{item.title}</h5>
                    <p className="mb-0">{item.desc}</p>
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
          <h3 className="fw-semibold mb-3">Technologies Used in Production</h3>
          <LogoSlider />
        </Fade>
      </Container>
    </>
  );
};

export default Home;
