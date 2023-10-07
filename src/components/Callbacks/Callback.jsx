import React, { useEffect, useState } from "react";

import './Callback.css';
import Mood from "../Mood/Mood";


function Callback() {
   const [access_token, setAccessToken] = useState(null);
   const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        // Parse the URL to extract the access token
        const hashParams = window.location.hash.substring(1).split("&");
        const tokenParam = hashParams.find(param => param.startsWith("access_token="));
        
        if (tokenParam) {
            const token = tokenParam.split("=")[1];
            setAccessToken(token)
        }

        setLoading(false);
        
    }, []);
       
   
    return (
        <div>
          {isLoading ? (
            <h1 className="typed-out">Redirecting you to Moodify....</h1>
          ) : (
          access_token ? <Mood access_token={access_token} />: null
          
    )}
          </div>
   

    );
}

export default Callback;


