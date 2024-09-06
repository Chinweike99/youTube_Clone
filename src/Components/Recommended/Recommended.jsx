import React, {useEffect, useState} from "react";
import './Recommended.css'
import assets from "../../assets/assets";
import { Link } from "react-router-dom";
import { convertValue, buttons } from "../value";
import moment from "moment";

const Recommended = ({categoryId, category, setCategory}) => {

    const API_KEY = import.meta.env.VITE_API_KEY;
    const [recommended, getRecommened] = useState([]);
    const [startIndex, setStartIndex] = useState(1);


    const fetchRecommended = async () => {
        const videoFetched = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=JP&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(videoFetched).then(res=>res.json()).then(data=>getRecommened(data.items));
    }


useEffect(() => {
    fetchRecommended();
}, [])

  const fetchVideos = async (categoryId) => {
    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=${categoryId}&key=${API_KEY}`;
    
    const response = await fetch(videoUrl);
    const data = await response.json();
    setVideos(data.items); // This updates the video list in the parent component
  };

    const handleScrollLeft = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const handleScrollRight = () => {
        if (startIndex < buttons.length - 2) {
            setStartIndex(startIndex + 1);
        }
    };




    return(
        <div className="recommended">
            <div className="nextScroll">
            <img src={assets.lessThan} alt="Scroll Left" onClick={handleScrollLeft} />
            <div className="scrollBtn">
                {buttons.slice(startIndex, startIndex + 3).map((button, index) => (
                    <Link key={index} to={button.path}>
                        <button
                         onClick={() => {
                            setCategory(button.categoryId);
                            fetchVideos(button.categoryId); 
                          }}>
                            {button.label}
                        </button>
                    </Link>
                ))}
            </div>
            <img src={assets.greater} alt="Scroll Right" onClick={handleScrollRight} />
            </div>


            <div className="maindiv1">
                {recommended.map((item, index)=>{
                    return (
                        <div className="channelInfo">
                        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="link" key={index}>
                            <img src={item.snippet.thumbnails.medium.url} alt="" />
                            <div className="recommendedDetails">
                                <div className="dotsDiv">
                                    <h3>{(item.snippet.title).slice(0, 35)}</h3>
                                    <div className="dots">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                                <h4>{item.snippet.channelTitle}</h4>
                                <p>{convertValue(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                            </div>
                           
                        </Link>
                        </div>
                    )

                })}
                
            </div>

        </div>
    )
}


export default Recommended;