import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavbarComponent.css';

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
      className={`py-3 custom-navbar ${scrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark-mode' : 'light-mode'} navbar-fade-in`}
      fixed="top"
    >
      <Container className="navbar-container">
        <Navbar.Brand href="#home" className="fw-bold fs-4 brand-name">Josua Ronaldo Pandiangan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="nav-links mx-auto">
            <Nav.Link href="#home" className="mx-2">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-2">About</Nav.Link>
            <Nav.Link href="#experiences" className="mx-2">Experiences</Nav.Link>
            <Nav.Link href="#projects" className="mx-2">Projects</Nav.Link>
            <Nav.Link href="#contact" className="mx-2">About</Nav.Link>
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