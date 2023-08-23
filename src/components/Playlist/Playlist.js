import React from 'react'
import './Playlist.css';
import SpotifyWebApi from 'spotify-web-api-node';
import Mood from '../Mood/Mood';
import { Link } from 'react-router-dom';


const spotify = new SpotifyWebApi();


export default function Playlist() {
 const selectedMood = Mood();


    spotify.getRecommendations({ seed_genres: [selectedMood] })
    .then(response => {
      // Handle the successful response here
      console.log(response);
    })
    .catch(error => {
      // Handle the error here
      console.error(error);
    });
  

  return (
    <div>
        <h1 className="title">
            Your Playlist has been created!
        </h1>
        <h2 className="text">You can play songs with either Spotify or the Moodify app:</h2>
<br>
</br>
<br>
</br>
<br></br>
    <Link to={`/webplayer`} 
    className="spotify-btn">Play on Moodify</Link>
    <Link to ={`https://spotify.com/`}
    className="moody-btn">Play on Spotify</Link>
      
    </div>
  )
}
