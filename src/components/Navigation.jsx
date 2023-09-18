import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaInstagram, FaTiktok, FaLinkedin, FaSun } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className="">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="order-2 order-lg-0">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/"} className="text-reset text-decoration-none">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"work"} className="text-reset text-decoration-none">
                Work
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"Contact"} className="text-reset text-decoration-none">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="order-1 order-lg-0">
          <FaSun></FaSun>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="order-3 order-lg-0">
          <Nav className="ms-auto">
            <Nav.Link>
              <FaInstagram></FaInstagram>
            </Nav.Link>
            <Nav.Link>
              <FaTiktok></FaTiktok>
            </Nav.Link>
            <Nav.Link>
              <FaLinkedin></FaLinkedin>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
