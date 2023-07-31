import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { LibraryMusic } from "@material-ui/icons";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

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
      <img
        className="sidebar__logo"
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />

      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusic} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      <div class="add-button">
            onClick={addNewPlaylist}
          </div>
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.data_title}
                        key = {playlist.id}
                        onClick={() => sidebarOptionClick(playlist.id)} 
                        />
                            ))}
                            </div>
  );
      }

export default Sidebar;