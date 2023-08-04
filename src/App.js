import React from "react";
import './App.css';
import spotifylogo from './spotify.png';
import Login from './Login';
import Player from './Player';



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
          { code ? <Player code={code} /> : <Login />}
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
