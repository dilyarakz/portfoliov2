import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

export default function Header() {
  return (
    <Navbar className="bg-body-tertiary fixed-top" data-bs-theme="dark">
      <Container>
        <Navbar.Collapse className="justify-content-center">
          <Nav className="nav-title">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
