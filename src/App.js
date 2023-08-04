import React from "react";
import './App.css';
import spotifylogo from './spotify.png';
import Login from './Login';

import WebPlayer from './WebPlayer';


const code = new URLSearchParams(window.location.search).get("code")



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={spotifylogo} className="App-logo" alt="logo" />
        <p>
          Welcome to Moodify!
        </p>
          
        <div className="App">
          <div className ="button">
          { code ? <WebPlayer code={code} /> : <Login />}
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
  );
}


export default App;
