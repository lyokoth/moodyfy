import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM from "react-dom" directly

import App from "./App";
import reducer from './reducer';
import { StateProvider } from "./utils/StateProvider";
import { initialState } from "./reducer";
// import Playlist from "./components/Playlist/Playlist";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
  
    </StateProvider>
  </React.StrictMode>
);