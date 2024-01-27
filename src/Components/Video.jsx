import React from "react";
const Video = ({ video, onVideoSelect }) => {
  const { id, snippet, statistics } = video;

  const handleSelect = () => {
    onVideoSelect(video);
  };

  return (
    <div className="video-card" onClick={handleSelect}>
      <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
      <div>
        <h3>{snippet.title}</h3>
        <p>{snippet.description}</p>
        {statistics && (
          <>
            <p>Views: {statistics.viewCount}</p>
            <p>Likes: {statistics.likeCount}</p>
            <p>Dislikes: {statistics.dislikeCount}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Video;
