import React from "react"
import { getAllVideos } from "./API/fetch";
import "./VideoListing.css";
function VideoListing (){
    
    return(
        <div className="videolisting">
        <h2>Recommened</h2>
        <getAllVideos />
        </div>
    )
}
export default VideoListing;