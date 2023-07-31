import React from "react";

function Mood() {
    
    
    return (
        <div class="row">
            <span class="drag">
                <p>Drag to select your mood:</p>
            </span>
            <input type="range" class='slider' id='mood' name='mood' step='0.01' min='0' max='1' required></input>
        </div>
         
    )
}

export default Mood;