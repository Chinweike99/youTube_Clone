import React, {useEffect, useState} from "react";
import './Recommended.css'
import assets from "../../assets/assets";
import { Link } from "react-router-dom";
import { convertValue } from "../value";
import moment from "moment";

const Recommended = ({categoryId}) => {

    const API_KEY = import.meta.env.VITE_API_KEY;
    const [recommended, getRecommened] = useState([]);

    const fetchRecommended = async () => {
        const videoFetched = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(videoFetched).then(res=>res.json()).then(data=>getRecommened(data.items));
    }


useEffect(() => {
    fetchRecommended();
}, [])

    const buttons = [
        { label: 'all', path: '/all' },
        { label: 'sketch', path: '/sketch' },
        { label: 'javascript', path: '/javascript' },
        { label: 'Reactjs', path: '/reactjs' },
    ];

    const [visibleIndex, setVisibleIndex] = useState(0);

    const handleScrollLeft = () => {
        if (visibleIndex > 0) {
            setVisibleIndex(visibleIndex - 1);
        }
    };

    const handleScrollRight = () => {
        if (visibleIndex < buttons.length - 2) {
            setVisibleIndex(visibleIndex + 1);
        }
    };




    return(
        <div className="recommended">
            <div className="nextScroll">
            <img src={assets.lessThan} alt="Scroll Left" onClick={handleScrollLeft} />
            <div className="scrollBtn">
                {buttons.slice(visibleIndex, visibleIndex + 3).map((button, index) => (
                    <Link key={index} to={button.path}>
                        <button>{button.label}</button>
                    </Link>
                ))}
            </div>
            <img src={assets.greater} alt="Scroll Right" onClick={handleScrollRight} />
            </div>


            <div className="maindiv1">
                {recommended.map((item, index)=>{
                    return (
                        <div className="channelInfo">
                        <Link key={index}>
                            <img src={item.snippet.thumbnails.medium.url} alt="" />
                            <div>
                                <div className="dotsDiv">
                                    <h3>{item.snippet.title}</h3>
                                    <div className="dots">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                                <h4>{item.channelTitle}</h4>
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