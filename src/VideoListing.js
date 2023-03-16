import React from "react"
import VideoCard from "./VideoCard";
import "./VideoListing.css"

function VideoListing (){
    
    return(
        <div className="videoListing">
            <h2>Recommended</h2>
         <div className="videoListing_videos">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
         </div>
        </div>
        
        
    )
}
export default VideoListing;