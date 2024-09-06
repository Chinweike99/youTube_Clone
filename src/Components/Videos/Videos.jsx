import React from "react";
import './Videos.css'
import PlayVideo from "../PlayVideo/PlayVideo";
import Recommended from "../Recommended/Recommended";
import { useParams } from "react-router-dom";

const Videos = () => {

    const {videoId, categoryId} = useParams()

    console.log("Video ID from params:", videoId);
  
    return(
        <div className="manVideo">
            <div className="videos">
                <PlayVideo videoId={videoId} categoryId={categoryId}/>
                <Recommended categoryId={categoryId}/>
            </div>
        </div>
    )
}


export default Videos;