import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navLogo from './icons8-spotify-50.png';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Navibar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={navLogo}
              alt="logo"
              width="45"
              height="45"
              className="d-inline-block align-top"
            />
          
          </Navbar.Brand>

           {/* Hamburger Menu Icon */}
           <div className="custom-hamburger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/" exact>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/webplayer">
                Player
              </Nav.Link>
              <Nav.Link as={Link} to="/mood">
                Mood
              </Nav.Link>
              <Nav.Link as={Link} to="/playlist">
                Playlists
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navibar;
