import React from "react";
import Home from "../components/Home";
import './About.css';




function About() {
    return (
        <div>
            <h1>About</h1>
            <h2>Moodify is a React-based Spotify app that aims to create personalized playlists tailored to your current emotional state.</h2>

        <p>Our app utilizes the Spotify Web API to seamlessly access your playlists and song library, allowing you to discover new tracks that resonate with your feelings. 
         The app analyzes your mood by using a slider to select what you are feeling at the moment, and curate playlists filled with songs that perfectly complement your emotions.</p>
        <div class="button-back">
            <a href={Home}>Go Back</a>
            
        </div>
        </div>
    )
}

export default About;