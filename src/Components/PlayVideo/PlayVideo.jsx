import React from "react";
import './PlayVideo.css'
import assets from "../../assets/assets";

const PlayVideo = () => {
    return(
        <div className="plavVideo">
            <div className="mainDiv">
                <video src={assets.video1} autoPlay controls muted />
                <h2>Learn to ride like a pro, within the shortest posible time !...</h2>
                <div className="controlDiv">
                    <div className="user">
                        <img src={assets.amandla} alt="" />
                        <div>
                            <h3>Chinweike</h3>
                            <span>40k Subscribers</span>
                        </div>
                        <button>Subscribe</button>
                    </div>
                    <div className="actions">
                        <div className="reactions">
                            <img src={assets.thumbsUp} alt="Like" />
                            <span>62</span>
                            <div className="verticalLine"></div>
                            <img src={assets.thumbsDown} alt="Dislike" />
                        </div>
                        <div className="share">
                            <img src={assets.shareSolid} alt="Share" />
                            <span>Share</span>
                        </div>
                        <div className="download">
                            <img src={assets.downloadSolid} alt="Download" />
                            <span>Download</span>
                        </div>
                        <div className="clip">
                            <img src={assets.clip} alt="Clip" />
                            <span>Clip</span>
                        </div>
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PlayVideo;