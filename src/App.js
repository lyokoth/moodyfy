import React , { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import axios from 'axios';
import Navibar from './Navibar';
import WebPlayer from './components/Player/WebPlayer';
import Mood from './components/Mood/Mood';
import Home from './components/Home/Home';
import About from './pages/About';
import Playlist from './components/Playlist/Playlist';


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


function Footer() {
  return <Footer />
}

function App() {
  const [token, setToken] = useState('');
  function Login() {
    return (
      <> 
      { (token === '') ? <Login/> : <WebPlayer token={token} /> }
      </>
    )
  }

  useEffect(() => {
    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();


  }, []);


  return (
    
    <Router>
    <Navibar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/webplayer" element={<WebPlayer />} />
      <Route path="/mood" element={<Mood />} />
      <Route path="/about" element={<About />} />
      <Route path="/playlist" element={<Playlist />} />
   
    </Routes>
  </Router>
   
  );
}

export default App;