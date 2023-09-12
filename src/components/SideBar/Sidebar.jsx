import React, {useState} from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { LibraryMusic } from "@mui/icons-material";
import Playlists from "../Playlists/Playlists";


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
    <div className="sidebar">
      <strong className="sidebar__title">Main</strong>
      <br /> 
      <hr />
      
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusic} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      <div className="add-button">
            <div className="button">
            Add New Playlist{addNewPlaylist}
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
  );
      }

      
