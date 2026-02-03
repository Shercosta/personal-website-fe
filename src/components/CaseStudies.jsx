import { Container, Card } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import projects from "../arrays/project";

const CaseStudies = () => {
  return (
    <Container className="pb-5">
      <Fade triggerOnce>
        <h3 className="fw-semibold mb-4">Selected Case Studies</h3>
      </Fade>

      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-4" key={project.label}>
            <Fade triggerOnce direction="up">
              <Card className="h-100 border-0 shadow-sm rounded-4 bg-body">
                {project.image && (
                  <Card.Img
                    src={project.image}
                    className="rounded-top-4"
                    style={{ height: 180, objectFit: "cover" }}
                  />
                )}

                <Card.Body>
                  <h5 className="fw-semibold">{project.label}</h5>
                  <p className="text-softer">{project.caption}</p>
                </Card.Body>
              </Card>
            </Fade>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CaseStudies;
