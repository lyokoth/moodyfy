import React, {useEffect, useState} from "react";
import "./Player.css";
import { useDataLayerValue } from "./DataLayer";
import Login from "./Login";

import Footer from "./Footer";
import Body from "./Body";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from "./Spotify";




const spotify = new SpotifyWebApi();


function Player() {
  // eslint-disable-next-line no-unused-vars
  const [{ token }, dispatch] = useDataLayerValue();
  const [loggedIn, setLoggedIn] = useState(false);
  const [spotifyTokenState, setSpotifyTokenState] = useState("")

  useEffect(() => {
  const token = getTokenFromUrl();
    if (token) {
      dispatch({
        type: "SET_SPOTIFY_TOKEN",
        token: token,
      });
      setLoggedIn(true);
  }
}, [dispatch]);

   useEffect(() => {
   if (spotifyTokenState !== "") {
    setSpotifyTokenState(spotifyTokenState)
  }
}, [spotifyTokenState]);


  
  return (
    <div className="player">
      <div className="player__body">
  
        {loggedIn && <h1>Welcome to Moodify!</h1>}
        {!loggedIn && <Login />}
        <Body spotify={spotify} />
      </div>
      <Footer />
      </div>
  );
}
      

export default Player;
