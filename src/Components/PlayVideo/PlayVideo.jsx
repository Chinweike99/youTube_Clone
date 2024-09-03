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


            {/* ABOUT VIDEO */}
            <div className="aboutpost">
                <span>1,500 views &bull; 3 hours ago</span>
                <p>The blue underline is the default style applied to tags to indicate a clickable link. Browsers typically add this style to make links visually distinct. By using text-decoration: none;, you override this default behavior.</p>
            </div>



            {/* COMMENTS */}
            <div className="commentsDiv">
                <div className="commentHeading">
                    <h1>500 Comments</h1>
                    <div className="hamburger">
                        <div className="div1"></div>
                        <div className="div2"></div>
                        <div className="div3"></div>
                    </div>
                    <h3>Sort by</h3>
                </div>

                <div className="addComment">
                    <img src={assets.image4} alt="" />
                    <div>
                        <h4>Add a comment</h4>
                        <hr />
                    </div>
                </div>

                <div>
                    <img src={assets.img5} alt="commenter" />
                    <div>
                        <h5>@chidiw4343 <span>7 hours ago</span> </h5> 
                        <p>keep putting in the hard work my brother</p>
                    </div>
                    <div>
                        <img src={assets.thumbsUp} alt="" />
                        <span>123</span>
                        <img src={assets.thumbsDown} alt="" />
                        <button>Reply</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default PlayVideo;