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
          <Nav.Link href="#features">Skills</Nav.Link>
          <Nav.Link href="#pricing">Projects</Nav.Link>
          <Nav.Link href="#pricing">Testimonials</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;