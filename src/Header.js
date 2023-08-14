import React, {useState, createContext} from "react"

import { Search } from "@mui/icons-material";
import "./Header.css";
import { Avatar } from "@material-ui/core";

export const UserContext = createContext();


function Header() {
  const { user, setUser }= useState(null);

  setUser({user});


  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input placeholder="Search for Artists, Songs, or Albums" type="text" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;