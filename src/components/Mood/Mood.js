import React, { useState } from "react";
import "./Mood.css";
import Home from "../Home";

function Mood() {
    const [moodValue, setMoodValue] = useState(0.5);

    const moodChange = (e) => {
        const newMoodValue = parseFloat(e.target.value);
        setMoodValue(newMoodValue);
    };

    let iconSrc = "../images/happy.png";

    if (moodValue <= 0.15) {
        iconSrc = "../components/images/depressed.jpg";
    } else if (moodValue <= 0.50) {
        iconSrc = "../components/images/sad.jpg";
    } else if (moodValue <= 0.85) {
        iconSrc = "../components/images/happy.png";
    } else {
        iconSrc = "../components/images/elated.jpg";
    }

    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
                    <h2 className="mood-header">Hello, {"{ user}"}! </h2>
                </div>
            </div>
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col">
                        <h1 className="mood-header">
                            What's your mood?
                        </h1>
                    </div>
                </div>
            </div>
            <form action="/playlist">
                <div className="row">
                    <div className="col">
                        <input type="text" id="name" placeholder="Enter Playlist Name" required={true}></input>
                        <div>
                            <img alt="icon" src="/src/icons8-spotify-50.png" height="450" width="450" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span className="drag">
                            <p>Drag to select your mood: </p>
                        </span>
                    </div>
                </div>
                <div className="slide">
                    <input type="range" className='slider' id="mood" name='mood' step='0.01' min='0' max='1' onChange={moodChange} required></input>
                </div>
                <div className='col'>
                    <input type="submit" className="btn btn-secondary submit" />
                    <a href={Home} className="button-back"> Go Home</a>
                </div>
            </form>
            <img alt="icon" src={iconSrc} height="200" width="200" />
        </div>
    );
}

export default Mood;
