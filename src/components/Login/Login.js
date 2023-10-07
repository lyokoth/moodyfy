import React, { useEffect  } from "react";
import '../../App.css';
import spotifylogo from '../../spotify.png';
const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/callback";
const clientId = "d208be818d2242c89febb3207ba06e89";



export default function Login({ onTokenRetrieved }) {
  

  const url = window.location.href; 

  const urlParams = new URLSearchParams(url.split('#')[1]);
  const access_token = urlParams.get('access_token');
  
  useEffect(() => {

  if (access_token) {
    console.log("Access Token:", access_token)
  } else {
    console.error("Access Token not found in URL.");
  }
}, [access_token]);

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
      </header>
      <div>
        {!access_token ? (
          <div>
            {/* Your login component JSX here */}
            {/* For example, a login button that redirects to Spotify authentication */}
            <a href={loginUrl} onClick={onTokenRetrieved}>
              Login With Spotify
            </a>
          </div>
        ) : (
          <div>
            <p>Access token: {access_token}</p>
          </div>
        )}
      </div>
    </div>
  )}; 
  
  /* comment */
  // comment 
