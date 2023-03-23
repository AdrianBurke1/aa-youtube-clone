import React from "react";

const Video = ({ video, onVideoSelect }) => {
  const { id, snippet } = video;

  const handleSelect = () => {
    onVideoSelect(video);
  };

  return (
    <div onClick={handleSelect}>
      <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
      <div>
        <h3>{snippet.title}</h3>
        <p>{snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;
