import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';
import { NavLink } from "react-router-dom";


const NavbarComponent = ({ isDarkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  const handleToggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  }

  return (
    // SOROT: Tambahkan kelas 'navbar-fade-in' di sini
    <Navbar
      className={`py-3 custom-navbar ${scrolled ? "scrolled" : ""} ${
        isDarkMode ? "dark-mode" : "light-mode"
      } navbar-fade-in`}
      fixed="top"
    >
      <Container className="navbar-container">
        <Navbar.Brand as={NavLink} to="/" style={{ color: 'inherit' }} className="brand-name">
          Josua Ronaldo Pandiangan
        </Navbar.Brand>
          <Nav className="nav-links mx-auto  d-none d-lg-flex">
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
          <Nav className="dark-mode-section ms-auto d-none d-lg-flex">
            <div className="dark-mode-toggle" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <i className="bi bi-moon-fill fs-5"></i>
              ) : (
                <i className="bi bi-sun-fill fs-5"></i>
              )}
            </div>
          </Nav>
        <div className="sidebar-toggle d-lg-none" onClick={handleToggleSidebar}>
          <i className={`bi ${isSidebarOpen ? "bi-x-lg" : "bi-list"} fs-2`}></i>
        </div>

        {/* Sidebar */}
        <div className={`custom-sidebar ${isSidebarOpen ? "open" : ""}`}>
          <Nav className="flex-column p-4">
            <Nav.Link as={NavLink} to="/" onClick={handleCloseSidebar}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleCloseSidebar}>About</Nav.Link>
            <Nav.Link as={NavLink} to="/experience" onClick={handleCloseSidebar}>Experience</Nav.Link>
            <Nav.Link as={NavLink} to="/project" onClick={handleCloseSidebar}>Project</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={handleCloseSidebar}>Contact</Nav.Link>
            <div className="mt-3" onClick={toggleDarkMode}>
              {isDarkMode ? <i className="bi bi-moon-fill fs-5"></i> : <i className="bi bi-sun-fill fs-5"></i>}
            </div>
          </Nav>
        </div>

        {/* Sidebar Overlay */}
        {isSidebarOpen && <div className="sidebar-backdrop" onClick={handleCloseSidebar}></div>}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;