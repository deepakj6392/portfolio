import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './style.css';
import { PROFILE } from "../../../data";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand as={NavLink} to="/">
          {PROFILE.NAME}
        </Navbar.Brand>
        
        {/* Mobile Menu Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        {/* Navigation Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" >
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/service">
              Services
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
