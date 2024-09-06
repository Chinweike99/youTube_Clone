import React, {useEffect, useState} from "react";
import './Recommended.css'
import assets from "../../assets/assets";
import { Link } from "react-router-dom";
import { convertValue } from "../value";
import moment from "moment";

const Recommended = ({categoryId, setCategory}) => {

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

const buttons = [
    {label: 'all', categoryId: '0'},
    {label: 'Film & Animations', categoryId: '1'},
    {label: 'Gaming', categoryId: '20'},
    {label: 'Autos & vehicles', categoryId: '2'},
    {label: 'Music', categoryId: '10'},
    {label: 'Pets & Animals', categoryId: '15'},
    {label: 'Sports', categoryId: '17'},
    {label: 'Travels & Events', categoryId: '19'},
    {label: 'VideoBlogging', categoryId: '21'},
    {label: 'People & blogs', categoryId: '22'},
    {label: 'Comedy', categoryId: '23'},
    {label: 'Entertainment', categoryId: '24'},
    {label: 'Movies', categoryId: '35'},
    {label: 'Foreign', categoryId: '38'},
    {label: 'Thriller', categoryId: '41'},
    {label: 'News & Politics', categoryId: '25'},
    {label: 'Life Style', categoryId: '26'},
    {label: 'Education', categoryId: '27'},
    {label: 'Science & Education', categoryId: '28'},
    {label: 'Nonprofits & Activism', categoryId: '29'},
    {label: 'New to you', categoryId: '25'},
  ];


  const fetchVideos = async (categoryId) => {
    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=${categoryId}&key=${API_KEY}`;
    
    const response = await fetch(videoUrl);
    const data = await response.json();
    setVideos(data.items); // This updates the video list in the parent component
  };

    // const [startIndex, setVisibleIndex] = useState(0);

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