import React, { useEffect } from "react";

import './Callback.css';
import Mood from "../Mood/Mood";


function Callback({ onTokenRetrieved }) {
   
    useEffect(() => {
        // Parse the URL to extract the access token
        const hashParams = window.location.hash.substring(1).split("&");
        const tokenParam = hashParams.find(param => param.startsWith("access_token="));
        
        if (tokenParam) {
            const accessToken = tokenParam.split("=")[1];
            onTokenRetrieved(accessToken); // Pass the access token to your callback function
        }
    }, [onTokenRetrieved]);
       
   
    return (
        <div>
          <h1 className="typed-out">Redirecting you to Moodify....</h1> : <Mood />
          
          </div>
   

    );
}

export default Callback;


