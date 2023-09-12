
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import { Link} from 'react-router-dom';


export default function Playlist() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedMood = searchParams.get('mood');
 

  useEffect(() => {

    const spotify = new SpotifyWebApi();
    // Fetch recommendations using selectedMood
    spotify.getRecommendations({ seed_genres: [selectedMood] })
      .then(response => {
        // Handle the successful response here
        console.log(response);
      })
      .catch(error => {
        // Handle the error here
        console.error(error);
      });
  }, [selectedMood]);

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
