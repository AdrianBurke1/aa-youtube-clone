import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import AppsIcon from "@mui/icons-material/Apps";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import Switch from "./switch";
import styled from "./Component/styled"


const styledApp = styled.div`
minHeight: "100vh";
textAlign: "center";
paddingTop: "10rem";
backgroundColor: "#f5f5f5";
`;
const Name = styled.h1`
margin: 1rem
`;

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon className="header_menuIcon" />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
          alt=""
        ></img>
      </div>

      <div className="header_input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header_inputButton" />
        <styledApp>
          <SunIcon />
          <Switch />
          <MoonIcon />
        </styledApp>
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <Avatar
          alt="Adrian Burke"
          src="https://avatars.githubusercontent.com/u/114108495?v=4"
          sx={{ width: 36, height: 36 }}
        />
      </div>
    </div>
  );
}
export default Header;
