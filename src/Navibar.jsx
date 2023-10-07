import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import  navLogo from './icons8-spotify-50.png';
import $ from 'jquery';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navibar() {

  $(document).ready(function(){
    $('#bar').click(function(){
      $(this).toggleClass('open');
      $('.menu').toggleClass('open');
    });
  });

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={navLogo}
          alt="logo"
          width="60"
          height="60"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>

      {/* Use Navbar.Toggle to toggle the menu */}
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <div id="bar">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>


              </div>

 {/* Use Navbar.Collapse to show/hide the menu */}

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" exact={true}>
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
    </Navbar>
  );
}

