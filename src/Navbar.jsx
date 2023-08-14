import React from 'react';
import "./Navbar.css";
import  navLogo  from './icons8-spotify-50.png';


function Navbar() {
  return (
  
    <nav className='navbar'>
        <a href="/">Home</a>
        <a href="/about">About</a>
        
        <a href="/profile">Player</a>
        <a href="/mood">Mood</a>

        <div className='navbar-brand'>
          <div className='logo'>
          <img src= {navLogo} alt="logo" className='navbar-brand'></img>
          </div>
        </div>
     
   
    </nav>

  );
}

export default Navbar;
