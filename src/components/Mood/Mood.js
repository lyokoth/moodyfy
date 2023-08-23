import React, { useEffect, useState } from "react";
import "./Mood.css";

import { Link } from "react-router-dom";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

function Mood() {
    const [moodValue, setMoodValue] = useState(0.5);
    const [user_id, setUserId] = useState(null);
    const [displayName, setDisplayName] = useState("")
  

    useEffect(() => {
        // Fetch the user's display name using the Spotify Web API
        async function fetchDisplayName() {
            try {
                const response = await spotifyApi.getMe();
                setDisplayName(response.display_name);
            } catch (error) {
                console.error("Error fetching user display name:", error);
            }
        }

        fetchDisplayName();
    }, []);


    useEffect(() => {
        async function fetchUserId() {
            try {
                const response_id = await spotifyApi.getMe();
                setUserId(response_id.id);
            } catch (error) {
                console.error("Error fetching User ID:", error);
            }
        }

        fetchUserId();
    }, []);

    const moodChange = (e) => {
        const newMoodValue = parseFloat(e.target.value);
        setMoodValue(newMoodValue);
        fetchMood(newMoodValue);
    };

    const fetchMood = async (moodValue) => {
         try {
            if (!user_id) {
                console.error("User Id not available.");
                return;
            
        }
            spotifyApi.setAccessToken('BQDupEJLOHJuG5DfvxnRYNVxn9Jq9ndIZ2LfikhscKC1DbmsneQSGljKl5BnTmqiDCZpF35H69ue0sehGuyfenT6-3WaNZox9c-S3RYMccTTUszwd8MA-jd_QcsAAFw98qqjsfxuM9FY3Ynl55nRUyoUGb35CUUvmBOQjBhbEnd3uL_wT7-gN9_keSH-orFWT6wo0fYjLEMYP44wKVpe2pc5WPJ1G1EZlcmVQzQBMec10vBUs0qGDfii628jE0WtcCPZWpbpSM8sTw&token_type=Bearer&expires_in=3600');

            const response = await spotifyApi.createPlaylist("21avdtxygavnpmwvjdymer53a", {
                name: "My Moodify Playlist",
                public: true,
                description: "Playlist retrieved from Moodify",
            });
            const playlist_id = response.id;

            const recommendationsResponse = await spotifyApi.getRecommendations({
                 seed_tracks: ["10FC7rI5KzGmyTHowOoebw"],
                 target_valence: moodValue,
                
            });

            const trackUri = recommendationsResponse.tracks.map((track) => track.uri);
          
       
            await spotifyApi.addTracksToPlaylist(playlist_id, trackUri);

            console.log("Your Playlist has been created!");
        } catch (error) {
            console.error('Error fetching playlists: ', error);
        }
    };

    let iconSrc = "../Mood/images/spotify1.png";

    if (moodValue <= 0.15) {
        iconSrc = "../Mood/images/depressed.jpg";
    } else if (moodValue <= 0.50) {
        iconSrc = "../Mood/images/sad.jpg";
    } else if (moodValue <= 0.85) {
        iconSrc = "../Mood/images/happy.png";
    } else {
        iconSrc = "../Mood/images/elated.jpg";
    }

    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
                    <h1 className="mood-header">Hello, {displayName || "User"} ! </h1>
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
