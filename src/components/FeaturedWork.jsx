import { Card, Container, Badge } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const FeaturedWork = ({ projects }) => {
  return (
    <Container className="py-5">
      <Fade triggerOnce>
        <h1 className="fw-bold mb-3">Experience</h1>
        <p className="text-soft mb-5" style={{ maxWidth: 700 }}>
          A selection of production systems and real-world projects I’ve worked
          on as a full-stack developer.
        </p>
      </Fade>

      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-6" key={project.label}>
            <Fade triggerOnce direction="up">
              <Card className="h-100 border-0 shadow-sm rounded-4 bg-body">
                {project.image && (
                  <Card.Img
                    variant="top"
                    src={project.image}
                    className="rounded-top-4"
                    style={{ maxHeight: 220, objectFit: "cover" }}
                  />
                )}

                <Card.Body className="p-4">
                  <Badge bg="secondary" className="mb-2">
                    Featured
                  </Badge>

                  <h4 className="fw-semibold">{project.label}</h4>
                  <p className="text-soft">{project.caption}</p>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className="fw-medium text-decoration-none"
                    >
                      View project →
                    </a>
                  )}
                </Card.Body>
              </Card>
            </Fade>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeaturedWork;
