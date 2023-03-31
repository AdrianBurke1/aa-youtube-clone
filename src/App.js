import "./App.css";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import VideoListing from "./VideoListing";
import fetchData from "./API/fetch";
import Video from "./Components/Video";
import VideoDetail from "./Components/VideoDetail";
import { Routes, Route, } from "react-router-dom";
import SearchBar from "./Components/SearchBar";


const App = () => {
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
    <div className="wrapper">
      <Header onSearch={handleSearch}/>
      <div className="app_page">
      <Sidebar />
        {videos.map((video) => (
          <Video key={video.id.videoId} video={video} />
          
        ))}
      </div>
   <Routes>
     
    
    </Routes>
   
    </div>
  );
};

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
