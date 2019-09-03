import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-scroll";

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto justify-content-center header">
            <Link className="nav-link" to="home" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
            <Link className="nav-link" to="skills" spy={true} smooth={true} offset={50} duration={500}>
              Skills
            </Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;