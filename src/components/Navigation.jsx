import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaInstagram, FaTiktok, FaLinkedin, FaSun } from "react-icons/fa6";

function Navigation() {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container className="">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <FaSun></FaSun>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
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
