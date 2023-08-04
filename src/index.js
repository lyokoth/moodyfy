import React from "react";
import ReactDOM from "react-dom/client";


import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from "./StateContext";
import reducer, { initialState } from "./reducer";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);


    root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
     <App />
    </StateProvider>
  </React.StrictMode>
 );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();