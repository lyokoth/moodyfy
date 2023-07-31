import React, { useEffect, useState } from "react";
import { DataLayer } from "./DataLayer";
import './App.css';
import spotifylogo from './spotify.png';
import Login from './Login';
import Player from './Player';
import SpotifyWebApi from 'spotify-web-api-node';
import { getTokenFromUrl } from "./Spotify";


function App() {

  const spotify = new SpotifyWebApi();
  const token = getTokenFromUrl();
  const [spotifyToken, setSpotifyToken] = useState();
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);

 
  const initialState = {
    spotifyToken: null,
    user: null,

  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_SPOTIFY_TOKEN':
        return {
          ...state,
          spotifyToken: action.token,
        };
      case 'SET_USER':
        return {
          ...state,
          user: action.user,
        }

    default:
      return state;
    }
  };

  useEffect(() => {
    setSpotifyToken(token);

  }, [token]);



  return (
    <DataLayer initialState={initialState} reducer={reducer}>
    <div className="App">
      <header className="App-header">
        <img src={spotifylogo} className="App-logo" alt="logo" />
        <p>
          Welcome to Moodify!
        </p>
          
        <div className="App">
          <div className ="button">
          { spotifyToken ? <Player spotify={spotify} /> : <Login />}
        </div>
        </div>
        <hr />

        <div className ="About">
          <div className="about-button">
           <p>About</p>    
          </div>
        </div>
      </header>
    </div>
    </DataLayer>
  );
}


export default App;
