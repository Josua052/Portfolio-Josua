import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
import { NavLink } from "react-router-dom";


const NavbarComponent = ({ isDarkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // SOROT: Tambahkan kelas 'navbar-fade-in' di sini
    <Navbar
      expand="lg"
      className={`py-3 custom-navbar ${scrolled ? "scrolled" : ""} ${
        isDarkMode ? "dark-mode" : "light-mode"
      } navbar-fade-in`}
      fixed="top"
    >
      <Container className="navbar-container">
        <Navbar.Brand as={NavLink} to="/" style={{ color: 'inherit' }} className="fw-bold fs-4 brand-name">
          Josua Ronaldo Pandiangan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="nav-links mx-auto">
            <Nav.Link as={NavLink} to="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="mx-2">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/experience" className="mx-2">
              Experience
            </Nav.Link>
            <Nav.Link as={NavLink} to="/project" className="mx-2">
              Project
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="mx-2">
              Contact
            </Nav.Link> 
          </Nav>
          <Nav className="dark-mode-section ms-auto">
            <div className="dark-mode-toggle" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <i className="bi bi-moon-fill fs-5"></i>
              ) : (
                <i className="bi bi-sun-fill fs-5"></i>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;