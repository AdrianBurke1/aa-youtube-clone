// VideoDetail.js
import React from "react";
import { useParams } from "react-router-dom";

const VideoDetail = () => {
  const { videoId } = useParams();

  // Fetch the video details using videoId and render the video player here

  return (
    <div>
      <h2>Video Detail Page</h2>
      <p>Video ID: {videoId}</p>
      {/* Add video player or details here */}
    </div>
  );
};

export default VideoDetail;
