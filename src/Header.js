import React, {useState} from "react";
import "./Header.css";
// import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import AppsIcon from "@mui/icons-material/Apps";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import Switch from "./switch";
// import styled from "./Component/styled.css"
import fetchData from "./API/fetch.js";
import SearchBar from "./Components/SearchBar";
// const styledApp = styled.div`
// minHeight: "100vh";
// textAlign: "center";
// paddingTop: "10rem";
// backgroundColor: "#f5f5f5";`;
// const Name = styled.h1`
// margin: 1rem`;

// function Header({onSearch}) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [videos, setVideos] = useState([]);

//   const handleSearch = async () => {
//     const data = await fetchData(searchTerm);
//     setVideos(data);
//   };


const Header = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    // handle search with the search term
    console.log("Search term: ", searchTerm);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <header className="header">
      <div className="header_left">
        {/* <MenuIcon className="header_menuIcon" /> */}
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?20220706172052"
          alt=""
        ></img>
      </div>
        <SearchBar onSearch={onSearch}/>
      {/* <form className="header_input" onSubmit={handleSearch}>
        <input placeholder="Search" type="text" value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
        <SearchIcon className="header_inputButton" onClick={handleSearch}/> */}
        {/* {videos.map((video) => (
        <div key={video.id.videoId}>
          
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
              {video.snippet.title}
            </a>
        
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
          ></iframe>
          
        </div>
      ))} */}
      {/* </form> */}

      <div className="header_icons">
      < styledApp className="header_icon"  >
          <SunIcon className="header_icon" />
          <Switch className="header_icon" />
          <MoonIcon className="header_icon" />
        </styledApp >
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
}
export default Header;
