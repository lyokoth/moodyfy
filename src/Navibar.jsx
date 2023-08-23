import React from 'react';
import "./Navbar.css";
import  navLogo  from './icons8-spotify-50.png';
import { Container, Navbar, Nav, NavbarBrand } from 'react-bootstrap';

export default function Navibar() {
  return(
  <div>
    <Navbar id="main" expand="lg">
      <Container id="nav-container">
        <NavbarBrand href="https://developer.spotify.com/"> <img src={navLogo} alt="logo" height="80" />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='flex-column align-items-center'>
        <Nav className='navbar'>
          <Nav.Link href="/login">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/webplayer">Player</Nav.Link>
          <Nav.Link href="/mood">Mood</Nav.Link>
          <Nav.Link href="/playlist">Playlists</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}