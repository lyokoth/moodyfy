import React, { useEffect, useState } from "react";
import "./Mood.css";
import { Link } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";

import axios from "axios";
import { reducerCases } from "../../utils/Constants";
import { useStateProvider } from "../../utils/StateProvider";
// images
import depressed from './images/depressed.jpg';
import sad from './images/sad.jpg';
import happy from './images/happy.png';
import elated from './images/elated.jpg';

const spotifyApi = new SpotifyWebApi();

function Mood() {
  const [moodValue, setMoodValue] = useState(0.5);
  const [{ token }, dispatch] = useStateProvider();

  // Function to fetch user data
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userId: data.id,
        userUrl: data.external_urls.spotify,
        name: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, userInfo });
    };
    getUserInfo();
  }, [dispatch, token]);
  
  // Function to create a mood-based playlist
  async function fetchMood(moodValue) {
    try {
      // Ensure you have a valid access_token
      const access_token = "YOUR_ACCESS_TOKEN"; // Replace with your access token

      // Construct the playlist creation URL
      const playlist_url = `https://api.spotify.com/v1/me/playlists`;

      // Create the playlist
      const response = await fetch(playlist_url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: "Moodify Playlist",
          public: true,
          description: 'Playlist created in Moodify',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const playlist_id = data.id;

        // Get mood-based recommendations
        const recommendationsResponse = await spotifyApi.getRecommendations({
          seed_tracks: ["10FC7rI5KzGmyTHowOoebw"],
          target_valence: moodValue,
        });

        const trackUri = recommendationsResponse.tracks.map((track) => track.uri);

        // Add tracks to the playlist
        await spotifyApi.addTracksToPlaylist(playlist_id, trackUri);

        console.log("Your Playlist has been created!");
      } else {
        console.error('Error creating playlist:', response.status);
      }
    } catch (error) {
      console.error('Error creating playlist:', error);
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
                    <h1 className="mood-header">Hello, $`{"User"} ! </h1>
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
