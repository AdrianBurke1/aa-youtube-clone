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


//   return (
//     <Router>
//       <Switch>
//         <Route path="/video/:videoId">
//           <VideoDetail />
//         </Route>
//         <Route path="/">
//           <SearchBar onSearch={handleSearch} />
//           <div>
//             {videos.map((video) => (
//               <Video
//                 key={video.id.videoId}
//                 video={video}
//                 onVideoSelect={handleVideoSelect}
//               />
//             ))}
//           </div>
//           {selectedVideo && (
//             <iframe
//               width="560"
//               height="315"
//               src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
//               title={`YouTube video player for video ID ${selectedVideo.id.videoId}`}
//             ></iframe>
//           )}
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;
// const App = () => {
//   const [videos, setVideos] = useState([]);

  // const handleSearch = async (searchTerm) => {
  //   const data = await fetchData(searchTerm);
  //   setVideos(data);
  // };

  



// This is being done in my branch only push !!!
// Git add .
// Git commit -m “What I did”
// Git push origin Adrian-branch
// ------------------------------
// ONLY PULL IN MAIN !!!!
// Git checkout main
// Git pull origin main
