import React from "react";
import './App.css';

import spotifylogo from './spotify.png';




const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/callback";
const clientId = "d208be818d2242c89febb3207ba06e89";

export default function Login({ onTokenRetrieved }) {
  const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-read-private",
    "user-read-email",
    "user-modify-playback-state",
    "playlist-modify-public",
    "playlist-modify-private",
    "streaming",
  ];

  const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

  // Component JSX and logic here


  return (
    <div className="App">
      <header className="App-header">
        <img src={spotifylogo} className="App-logo" alt="logo" />
        <p>
          Welcome to Moodify!
        </p>
        <button className="button">
          <a href={loginUrl} onClick={onTokenRetrieved}>Login With Spotify</a>
          </button>
        </header>
        </div>
  )
}
