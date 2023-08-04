import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

// Create a new context
const StateContext = createContext();

// Create a custom hook to access the context value
export const useStateValue = () => useContext(StateContext);

// Create the StateProvider component to wrap your App and provide the state and dispatch
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
