import React, {useState} from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { Add, LibraryMusic } from "@mui/icons-material";
import Playlists from "../Playlists/Playlists";
import { QueueMusic } from "@mui/icons-material";


export default function Sidebar() {
  const [{ playlists }, dispatch] = useState([]);

  const handleAddPlaylist = (newPlaylist) => {
    dispatch({
      type: "ADD_PLAYLIST",
      payload: newPlaylist,
    });
  };


  const addNewPlaylist = () => {
    const newPlaylist = {
    id: "playlist_id",
  "data-title": "New Playlist",
  }; 
  
  handleAddPlaylist(newPlaylist);
};

   const sidebarOptionClick = (playlistId) => {
       dispatch({
      type: "SELECT_PLAYLIST",
      payload: playlistId,
    })
   }


  return (
    <div className="flex">
    <div className="sidebar">
      <br />
      <strong className="sidebar__title">MAIN</strong>
      <br /> 
      <hr />
      <SidebarOption title="Recently Played" Icon={QueueMusic} />
      <br />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusic} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      <div className="add-button">
       <br />
            <div className="button" onClick={addNewPlaylist}>
        <SidebarOption title="Create New Playlist" Icon={Add} />
        </div>
        </div>
    
 
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.data_title}
                        key = {playlist.id}
                        onClick={() => sidebarOptionClick(playlist.id)} 
                        />
                            ))}
                            <Playlists />
                            </div>
                            </div>
  );
      }

      
