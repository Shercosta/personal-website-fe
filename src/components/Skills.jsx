import { Container, Card, Badge } from "react-bootstrap";
import logos from "../arrays/techs";
import { Fade } from "react-awesome-reveal";

const levelLabel = {
  5: "Expert",
  4: "Advanced",
  3: "Intermediate",
  2: "Basic",
  1: "Familiar",
};

const Skills = () => {
  return (
    <Container className="py-5">
      <Fade>
        <h1 className="fw-bold mb-3">Technical Skills</h1>
        <p className="text-soft mb-5" style={{ maxWidth: 700 }}>
          Technologies I’ve used in real-world projects, ranked by expertise and
          frequency of use.
        </p>
      </Fade>

      <div className="row g-4">
        {logos
          .sort((a, b) => b.level - a.level || b.used - a.used)
          .map((logo) => (
            <div className="col-6 col-md-4 col-lg-3" key={logo.logoName}>
              <Fade direction="up">
                <Card className="h-100 border-0 shadow-sm rounded-4 bg-body text-center">
                  <Card.Body className="p-4">
                    <img
                      src={logo.logoUrl}
                      alt={logo.logoName}
                      style={{ height: 48 }}
                      className="mb-3"
                    />

                    <h6 className="fw-semibold mb-1">{logo.logoName}</h6>

                    <Badge bg="secondary" className="mb-2">
                      {levelLabel[logo.level]}
                    </Badge>
                  </Card.Body>
                </Card>
              </Fade>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Skills;
