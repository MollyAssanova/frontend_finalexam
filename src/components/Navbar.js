import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link as ScrollLink } from "react-scroll";
import { CgGitFork } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
      <Button
                href="https://github.com/MollyAssanova"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} /> Git
              </Button>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <ScrollLink
                className={activeSection === 'home' ? 'nav-link active' : 'nav-link'}
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  updateExpanded(false);
                  setActiveSection('home');
                }}
              >
                Home
              </ScrollLink>
            </Nav.Item>
            {/* Центрированный элемент */}
            <Nav.Item>
              <ScrollLink
                className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  updateExpanded(false);
                  setActiveSection('about');
                }}
              >
                About
              </ScrollLink>
            </Nav.Item>
            <Nav.Item>
              <ScrollLink
                className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  updateExpanded(false);
                  setActiveSection('projects');
                }}
              >
                Projects
              </ScrollLink>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
