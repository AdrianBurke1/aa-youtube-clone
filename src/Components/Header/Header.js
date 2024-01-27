import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import AppsIcon from "@mui/icons-material/Apps";
import MoonIcon from "../Dark-Light-mode/MoonIcon";
import SunIcon from "../Dark-Light-mode/SunIcon";

const Header = ({ onSearch, onDarkModeToggle, isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm); // Call the provided onSearch function with the search term
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className="header">
      <div className="header_left">
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
          alt=""
        ></img>
      </div>
      <form className="header_input" onSubmit={handleSearch}>
        <input
          placeholder="Search"
          type="text"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <SearchIcon className="header_inputButton" onClick={handleSearch} />
      </form>
      <div className="header_icons">
        <button className="header_icon" onClick={onDarkModeToggle}>
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
        <VideoCallIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <Avatar
          alt="Adrian Burke"
          src="https://avatars.githubusercontent.com/u/114108495?v=4"
          sx={{ width: 36, height: 36 }}
        />
      </div>
    </header>
  );
};

export default Header;