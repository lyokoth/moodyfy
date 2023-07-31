import React, { useReducer } from "react";
import "./Body.css";
import Header from "./Header";
import { DataLayerContext, useDataLayerValue } from "./DataLayer";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import SongRow from "./SongRow";

function Body({ spotify }) {
  
  const initialState = {
    discover_weekly: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  
  const [{ discover_weekly }] = useDataLayerValue();
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataLayerContext.Provider value={{state, dispatch}}>
      <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
        </div>
        </div>
    </DataLayerContext.Provider>
  );
        }
        export default Body;

