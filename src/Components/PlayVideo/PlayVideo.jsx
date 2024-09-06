import React from "react";
import './PlayVideo.css'
import assets from "../../assets/assets";

const PlayVideo = ({videoId}) => {



    return(
        <div className="plavVideo">
            <div className="mainDiv">
                {/* <video src={assets.video1} autoPlay controls muted /> */}
                <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  referrerpolicy="strict-origin-when-cross-origin"  allowfullscreen></iframe>
                {/* <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            

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
                    <div className="comment1">
                        <h4>Add a comment ...</h4>
                        <hr />
                    </div>
                </div>

                <div >
                    <div className="postCommenters">
                        <img src={assets.img5} alt="commenter" />
                        <div className="bottomreacts">
                            <h5>@chidiw4343 <span>7 hours ago</span> </h5> 
                            <p>Regarding your question about listing JavaScript as a language for the frontend: it's correct to include JavaScript because React.js is a JavaScript library, and JavaScript is the primary language used for writing React components. </p>
                            <div className="reacts">
                                <img src={assets.thumbsUp} alt="like" />
                                <span>123</span>
                                <img src={assets.thumbsDown} alt="dislike" />
                                <button>Reply</button>
                            </div>
                        </div>
                        <div className="bottomDots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>  
                    <div className="postCommenters">
                        <img src={assets.img5} alt="commenter" />
                        <div className="bottomreacts">
                            <h5>@chidiw4343 <span>7 hours ago</span> </h5> 
                            <p>Regarding your question about listing JavaScript as a language for the frontend: it's correct to include JavaScript because React.js is a JavaScript library, and JavaScript is the primary language used for writing React components. </p>
                            <div className="reacts">
                                <img src={assets.thumbsUp} alt="like" />
                                <span>123</span>
                                <img src={assets.thumbsDown} alt="dislike" />
                                <button>Reply</button>
                            </div>
                        </div>
                        <div className="bottomDots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>  
                    <div className="postCommenters">
                        <img src={assets.img5} alt="commenter" />
                        <div className="bottomreacts">
                            <h5>@chidiw4343 <span>7 hours ago</span> </h5> 
                            <p>Regarding your question about listing JavaScript as a language for the frontend: it's correct to include JavaScript because React.js is a JavaScript library, and JavaScript is the primary language used for writing React components. </p>
                            <div className="reacts">
                                <img src={assets.thumbsUp} alt="like" />
                                <span>123</span>
                                <img src={assets.thumbsDown} alt="dislike" />
                                <button>Reply</button>
                            </div>
                        </div>
                        <div className="bottomDots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>  
                    <div className="postCommenters">
                        <img src={assets.img5} alt="commenter" />
                        <div className="bottomreacts">
                            <h5>@chidiw4343 <span>7 hours ago</span> </h5> 
                            <p>Regarding your question about listing JavaScript as a language for the frontend: it's correct to include JavaScript because React.js is a JavaScript library, and JavaScript is the primary language used for writing React components. </p>
                            <div className="reacts">
                                <img src={assets.thumbsUp} alt="like" />
                                <span>123</span>
                                <img src={assets.thumbsDown} alt="dislike" />
                                <button>Reply</button>
                            </div>
                        </div>
                        <div className="bottomDots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>  
                    <div className="postCommenters">
                        <img src={assets.img5} alt="commenter" />
                        <div className="bottomreacts">
                            <h5>@chidiw4343 <span>7 hours ago</span> </h5> 
                            <p>Regarding your question about listing JavaScript as a language for the frontend: it's correct to include JavaScript because React.js is a JavaScript library, and JavaScript is the primary language used for writing React components. </p>
                            <div className="reacts">
                                <img src={assets.thumbsUp} alt="like" />
                                <span>123</span>
                                <img src={assets.thumbsDown} alt="dislike" />
                                <button>Reply</button>
                            </div>
                        </div>
                        <div className="bottomDots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>  
                    <div className="postCommenters">
                        <img src={assets.img5} alt="commenter" />
                        <div className="bottomreacts">
                            <h5>@chidiw4343 <span>7 hours ago</span> </h5> 
                            <p>Regarding your question about listing JavaScript as a language for the frontend: it's correct to include JavaScript because React.js is a JavaScript library, and JavaScript is the primary language used for writing React components. </p>
                            <div className="reacts">
                                <img src={assets.thumbsUp} alt="like" />
                                <span>123</span>
                                <img src={assets.thumbsDown} alt="dislike" />
                                <button>Reply</button>
                            </div>
                        </div>
                        <div className="bottomDots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>  
                    <div className="postCommenters">
                        <img src={assets.img5} alt="commenter" />
                        <div className="bottomreacts">
                            <h5>@chidiw4343 <span>7 hours ago</span> </h5> 
                            <p>Regarding your question about listing JavaScript as a language for the frontend: it's correct to include JavaScript because React.js is a JavaScript library, and JavaScript is the primary language used for writing React components. </p>
                            <div className="reacts">
                                <img src={assets.thumbsUp} alt="like" />
                                <span>123</span>
                                <img src={assets.thumbsDown} alt="dislike" />
                                <button>Reply</button>
                            </div>
                        </div>
                        <div className="bottomDots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>  
                    <div className="postCommenters">
                        <img src={assets.img5} alt="commenter" />
                        <div className="bottomreacts">
                            <h5>@chidiw4343 <span>7 hours ago</span> </h5> 
                            <p>Regarding your question about listing JavaScript as a language for the frontend: it's correct to include JavaScript because React.js is a JavaScript library, and JavaScript is the primary language used for writing React components. </p>
                            <div className="reacts">
                                <img src={assets.thumbsUp} alt="like" />
                                <span>123</span>
                                <img src={assets.thumbsDown} alt="dislike" />
                                <button>Reply</button>
                            </div>
                        </div>
                        <div className="bottomDots">
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