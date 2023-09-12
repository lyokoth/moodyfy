import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import reducer from './reducer';
import { StateProvider } from "./utils/StateProvider";
import { initialState } from "./reducer";


const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
      </StateProvider>
  </React.StrictMode>
);
