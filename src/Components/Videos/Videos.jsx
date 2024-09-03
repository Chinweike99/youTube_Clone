import React from "react";
import './Videos.css'
import PlayVideo from "../PlayVideo/PlayVideo";
import Recommended from "../Recommended/Recommended";

const Videos = () => {
    return(
        <div className="manVideo">
            <div className="videos">
                <PlayVideo />
                <Recommended />
            </div>
        </div>
    )
}


export default Videos;