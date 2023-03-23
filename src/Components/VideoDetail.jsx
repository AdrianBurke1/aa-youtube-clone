import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_KEY = "YOUR_API_KEY_HERE";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

const fetchVideoData = async (videoId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
    );
    const data = await response.json();
    return data.items[0];
  } catch (error) {
    console.error(error);
  }
};

const VideoDetail = () => {
  const { videoId } = useParams();
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      const data = await fetchVideoData(videoId);
      setVideoData(data);
    };
    fetchVideo();
  }, [videoId]);

  if (!videoData) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics } = videoData;

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={`YouTube video player for video ID ${videoId}`}
      ></iframe>
      <h3>{snippet.title}</h3>
      <p>{snippet.description}</p>
      <p>Views: {statistics.viewCount}</p>
      <p>Likes: {statistics.likeCount}</p>
      <p>Dislikes: {statistics.dislikeCount}</p>
    </div>
  );
};

export default VideoDetail;
