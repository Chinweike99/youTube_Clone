import React, { useEffect, useState } from "react";
import './PlayVideo.css'
import assets from "../../assets/assets";
import { convertValue, comaSeparated } from "../value";
import moment from "moment";

const PlayVideo = ({videoId}) => {

    const API_KEY = import.meta.env.VITE_API_KEY;
    const [data, setData] = useState(null);
    const [channelData, setChannel] = useState(null);
    const [commentDatas, setComments] = useState([])

    const getVideoData = async () =>{
        //FECTHING VIDEO DATA
        const videoData = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoData).then(res=>res.json()).then(data=>setData(data.items[0]))

    }

    const getChannelData = async () =>{
        //FECTHING CHANNEl DATA
        const channelInfo = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${data.snippet.channelId}&key=${API_KEY}`
        await fetch(channelInfo).then(res=>res.json()).then(data=>setChannel(data.items[0]))

    }

    const getCommentData = async () =>{
        //FECTHING COMMENT DATA
        const commentInfo = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=20&videoId=${videoId}&key=${API_KEY}`
        await fetch(commentInfo).then(res=>res.json()).then(data=>setComments(data.items))
    }


    useEffect(()=>{
        getVideoData();
    }, [])
    useEffect(()=>{
        getChannelData();
    }, [])
    useEffect(()=>{
        getCommentData();
    }, [])



    return(
        <div className="plavVideo">
            <div className="mainDiv">
                {/* <video src={assets.video1} autoPlay controls muted /> */}
                <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h2>{data?data.snippet.title : "Title"}</h2>
                <div className="controlDiv">
                    <div className="user">
                        <img src={channelData?channelData.snippet.thumbnails.medium.url: null} alt="" />
                        <div>
                            <h3>{data?data.snippet.channelTitle:"Channel Title"}</h3>
                            <span>{convertValue(channelData?channelData.statistics.subscriberCount : "No subscriber")} Subscribers</span>
                        </div>
                        <button>Subscribe</button>
                    </div>
                    <div className="actions">
                        <div className="reactions">
                            <img src={assets.thumbsUp} alt="Like" />
                            <span>{convertValue(data?data.statistics.likeCount: "0")}</span>
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
                <span>{convertValue(data?data.statistics.likeCount: 0)} views &bull; {moment(data?data.snippet.publishedAt: null).fromNow()}</span>
                <p>{(data?data.snippet.description: "Description here").slice(0, 350 )}</p>
            </div>



            {/* COMMENTS */}
            <div className="commentsDiv">
                <div className="commentHeading">
                    <h1>{comaSeparated(data?data.statistics.commentCount: "0")} Comments</h1>
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
                        <input type="text" placeholder="Add a comment..."/>
                    </div>
                </div>

                <div >
                {commentDatas.map((info, index) => {
                    return (
                     <div className="postCommenters" key={index}>
                        <img src={info.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="commenter" />
                        <div className="bottomreacts">
                            <h5>{info.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(info.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span> </h5> 
                            <p>{info.snippet.topLevelComment.snippet.textOriginal}</p>
                            <div className="reacts">
                                <img src={assets.thumbsUp} alt="like" />
                                <span>{info.snippet.topLevelComment.snippet.likeCount}</span>
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
                    )
                })}
                      
                </div>
            </div>
        </div>
    )
}


export default PlayVideo;