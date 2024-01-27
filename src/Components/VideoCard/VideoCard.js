import { Avatar } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link
import "./VideoCard.css";
import React from "react";

function VideoCard(props) {
  const { image, title, channel, views, timestamp, channelImage } = props;

  return (
    <Link to="/video/:videoId"> {/* Use Link to navigate to the video page */}
      <div className="videoCard">
        <img className="videoCard_thumbnail" src={image} alt="" />
        <div className="videoCard_info">
          <Avatar className="video_avatar" alt={channel} src={channelImage} />
          <div className="video_text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views} . {timestamp}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
