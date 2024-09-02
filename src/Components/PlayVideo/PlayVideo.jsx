import React from "react";
import './PlayVideo.css'
import assets from "../../assets/assets";

const PlayVideo = () => {
    return(
        <div>
            <video src={assets.video1}></video>
        </div>
    )
}


export default PlayVideo;