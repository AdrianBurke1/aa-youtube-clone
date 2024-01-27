import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom"; // Import Link for navigation
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import fetchData from "./API/fetch";
import Video from "./Components/Video";
import About from "./Components/About/About";
import VideoCard from "./Components/VideoCard/VideoCard";
import VideoDetail from "./Components/VideoDetail";
import "./App.css";
import "./Components/Dark-Light-mode/light-mode.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleSearch = async (searchTerm) => {
    const data = await fetchData(searchTerm);
    setVideos(data);
    setSelectedVideo(data[0]);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className={`wrapper ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Header onSearch={handleSearch} />
      <div className="app_page">
        <Sidebar />

        {/* Updated the route structure */}
        <Routes>
          <Route path="/" element={<div className="videos">
            {videos.map((video) => (
              <Link key={video.id.videoId} to={`/video/${video.id.videoId}`}>
                <Video
                  video={video}
                  onVideoSelect={handleVideoSelect}
                />
              </Link>
            ))}
          </div>} />
          <Route path="/about" element={<About />} />
          <Route path="/video/:videoId" element={<VideoCard />} />
          <Route path="/video/:videoId" element={<VideoDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
