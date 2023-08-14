import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import axios from 'axios';
import Navbar from './Navbar';

import About from './components/About';
import Mood from './components/Mood/Mood';
import Player from './Player';

const client_id ="d208be818d2242c89febb3207ba06e89";
const client_secret = ""
const redirect_uri= "http://localhost:3000/callback";
const code = new URLSearchParams(window.location.search).get('code');

if (code) {
  const token_url = 'https://service-auth-server.com/token';

  const request = new URLSearchParams({
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: redirect_uri,
    client_id: client_id,
    client_secret: client_secret
  });

  axios.post(token_url, request)
      .then(response => {
        const access_token = response.data.access_token;
        const expires_in = response.data.expires_in;


        console.log('Access Token:', access_token);
        console.log('Expires In:', expires_in);
      })
      .catch(error => {
        console.error('Error fetching access token:, error');
      });
} else {
  console.log("Please login to Spotify to see access token.")
}

function Home() {
  return (
  <Login />
  );
}


function Footer() {
  return <Footer />
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
   }



export default App;
