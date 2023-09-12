import React, { useCallback, useEffect } from 'react';
import Home from './components/Home/Home';
import Navibar from './Navibar';
import WebPlayer from './components/Player/WebPlayer';
import About from './pages/About';
import Playlist from './components/Playlist/Playlist';
import Mood from './components/Mood/Mood';
import Callback from './components/Callbacks/Callback';
import { useStateProvider } from './utils/StateProvider';
import { reducerCases } from './utils/Constants';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

export default function App() {
  const [{ token }, dispatch] = useStateProvider();

  // Define the onTokenRetrieved function to handle the retrieved token
  const onTokenRetrieved = useCallback((accessToken) => {
    dispatch({ type: reducerCases.SET_TOKEN, token: accessToken });
  }, [dispatch]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        // Call the onTokenRetrieved function to handle the token
        onTokenRetrieved(token);
      }
    }
    document.title = "Moodify";
  },[onTokenRetrieved] );

  useEffect(() => {
    if (token) {
      axios
        .get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          // You may want to perform additional actions here if needed
          <Callback />
        })
        .catch((error) => {
          console.error("Could not find Spotify Token.")
        });
    }
  }, [token]);

  return (
    <Router>
      <Navibar />
      <Routes>
        { token ? (
          <Route path="/callback" element={<Callback />} />
        ): null}
        <Route path="/" element={<Home />} />
        <Route path="/webplayer" element={<WebPlayer />} />
        <Route path="/about" element={<About />} />
        <Route path="/mood" element={<Mood />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </Router>
  );
}
