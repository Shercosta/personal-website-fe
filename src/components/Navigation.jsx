import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaSun,
  FaMoon,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../store";

function Navigation() {
  const theme = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggle());
  };

  const handleIconToggle = (theme) => {
    if (theme === "light") {
      document.documentElement.style.backgroundColor = "";
      document.querySelector("div").style.backgroundColor = "";
      document.querySelector("div").style.color = "";
      return <FaSun></FaSun>;
    } else {
      document.querySelector("div").style.backgroundColor = "#131515";
      document.documentElement.style.backgroundColor = "#131515";
      document.querySelector("div").style.color = "#FFFAFB";
      return <FaMoon></FaMoon>;
    }
  };

  return (
    <Navbar
      bg={theme}
      data-bs-theme={theme}
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="order-2 order-lg-0 width-40"
        >
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
              <Link to={"contact"} className="text-reset text-decoration-none">
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand
          className="order-1 order-lg-0"
          onClick={handleThemeToggle}
        >
          {handleIconToggle(theme)}
        </Navbar.Brand>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="order-3 order-lg-0 width-40"
        >
          <Nav className="w-100">
            <div className="nav-link ms-auto navbar-icon-spacer">
              <Nav.Link
                className="d-inline"
                href="https://www.instagram.com/shercostagp/"
                target="_blank"
              >
                <FaInstagram></FaInstagram>
              </Nav.Link>
              <Nav.Link
                className="d-inline"
                href="https://www.tiktok.com/@shercostagp"
                target="_blank"
              >
                <FaTiktok></FaTiktok>
              </Nav.Link>
              <Nav.Link
                className="d-inline"
                href="https://www.linkedin.com/in/geizka-ruicosta-5a3620144/"
                target="_blank"
              >
                <FaLinkedin></FaLinkedin>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
        {/* <Navbar.Collapse
          id="basic-navbar-nav"
          className="order-3 order-lg-0"
        ></Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default Navigation;
