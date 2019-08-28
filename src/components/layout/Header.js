import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Nav className="justify-content-center header">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#testimonials">Testimonials</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;