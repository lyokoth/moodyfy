import React, { useEffect, useState } from "react";
import "./Mood.css";
import { Link } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";

import { useStateProvider } from "../../utils/StateProvider";
import  dispatch, { fetchUserInfo }  from "../User/User";
import axios from "axios";
// images
import depressed from './images/depressed.jpg';
import sad from './images/sad.jpg';
import happy from './images/happy.png';
import elated from './images/elated.jpg';

const spotifyApi = new SpotifyWebApi();

function Mood() {
  const [moodValue, setMoodValue] = useState(0.5);
  const [{ userId, token }, dispatch] = useStateProvider();

  useEffect(() => {
    fetchUserInfo(token, dispatch);
  }, [token, dispatch]);

  // Function to fetch user data -- moved to User.js
     // *access_token is located in the console after logging in
  const access_token = token;  
      // Construct the playlist creation URL
      const playlist_url = `https://api.spotify.com/v1/me/playlists`;
      // const playlist_url = `https://api.spotify.com/v1/users/${userId}/playlists`;

  // Function to create a mood-based playlist
  async function fetchMood(moodValue) {
    try {
      const response = await fetch(playlist_url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Moodify",
          description: "Recommendation Playlist",
          public: true,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const playlist_id = data.id;

        const recommendationsResponse = await axios.get(`https://api.spotify.com/v1/recommendations?seed_artists=00DuPiLri3mNomvvM3nZvU&seed_genres=j-rock&seed_tracks=4zTHFEsROPDTEYlWTQcAXN&target_valence=${moodValue}`, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
    });
       const tracks = recommendationsResponse.data.tracks.map((track) => track.uri);

       await axios.post(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
      uris: tracks,
    }, {
      headers: {
        'Authorization': `Bearer ${access_token}`,
      },
    });

        console.log("Playlist created!");
      } else {
        console.log("Error creating playlist:", response.status);
      }
    } catch (error) {
      console.log(error);
    }
  }

 

  // Handle mood change
  const moodChange = async (e) => {
    const newMoodValue = parseFloat(e.target.value);
    setMoodValue(newMoodValue);
    await fetchMood  (newMoodValue);
  };


  let iconSrc = happy;
  if (moodValue <= 0.15) {
    iconSrc = depressed;
  } else if (moodValue <= 0.5) {
    iconSrc = sad;
  } else if (moodValue <= 0.85) {
    iconSrc = happy;
  } else {
    iconSrc = elated;
  }


    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
                    <h1 className="mood-header">Hello, kenyamegami! </h1>
                </div>
            </div>
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col">
                        <h3 className="mood-header">
                            What's your current mood?
                        </h3>
                    </div>
                </div>
            </div>
            <form action="/playlist">
                <div className="row">
                    <div className="col">
                        <input type="text" id="name" placeholder="Enter Playlist Name" required={true}></input>
                        <div>
                            <img alt="icon" className="icon" src={iconSrc} height="450" width="450" />

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span className="drag">
                            <p className="mood-slider">Drag to select your mood: </p>
                        </span>
                    </div>
                </div>
                <div className="slide">
                    <input type="range" className='slider' id="mood" name='mood' step='0.01' min='0' max='1' onChange={moodChange} required></input>
                </div>
                <div className='col'>
                <Link
          to={`/playlist?mood=${moodValue}`}
          className="btn btn-secondary submit"
          onClick={() => fetchMood(moodValue)} // Call fetchMood when the link is clicked
        >Submit
        </Link>
                    <Link to={"/"} className="button-back"> Go Home</Link>
                </div>
            </form>

        </div>
    );
}

export default Mood;
