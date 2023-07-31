import React, { useContext, useReducer } from "react";

export const DataLayerContext = React.createContext(); 


export const DataLayer = ({ initialState, reducer, children }) => (     


    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext);