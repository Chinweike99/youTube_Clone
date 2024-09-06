import React, { useEffect, useState } from "react";
import './Feed.css'
import assets from "../../assets/assets";
import { Link } from "react-router-dom";
import { convertValue } from "../value";
import moment from "moment";

const Feed = ({showName, category}) => {

    const API_KEY = import.meta.env.VITE_API_KEY;
    const [info, setInfo] = useState([])
    const [data, setData] = useState([]);
    const [shorts, setShorts] = useState([]);

    const getVideos = async()=>{

        const fetchedApi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;

        await fetch(fetchedApi).then(res=>res.json()).then(data=>setInfo(data.items))

    }
    const fetcData = async()=>{

        const fetched = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=NG&videoCategoryId=${category}&key=${API_KEY}`;

        await fetch(fetched).then(res=>res.json()).then(data=>setData(data.items))

    }

    const fetcShorts = async()=>{

        const fetched = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=7&regionCode=DE&videoCategoryId=${category}&key=${API_KEY}`;

        await fetch(fetched).then(res=>res.json()).then(data=>setShorts(data.items))

    }

    useEffect(()=>{
        getVideos()
        fetcData();
        fetcShorts();
    }, [category])

    // useEffect(()=>{
    //     fetcData();
    // }, [category])

    // useEffect(()=>{
    //     fetcShorts();
    // }, []);



    return (
        <div className={!showName ? "mainFeed" : null}>
            <div className="feeds">
                <div className="feedBox">
                    {info.map((item, index) =>{
                        return (
                            <Link className="link" key={item.id} to={`video/${item.snippet.categoryId}/${item.id}`} style={{textDecoration: "none", color: "black"}} >
                            <img className="feedBoxImg" src={`${item.snippet.thumbnails.medium.url}`} alt="" />
                            <div className="feedImg">
                                <img src={`${item.snippet.thumbnails.standard.url}`} alt="" />
                                <div >
                                <h3>{`${item.snippet.title}`.slice(0, 30)}</h3>
                                <h4>{`${item.snippet.channelTitle}`}</h4>
                                <p>{convertValue(`${item.statistics.viewCount}`)} views &bull; {moment(`${item.snippet.publishedAt}`).fromNow()}</p>
                            </div>
                            </div>
                            </Link>
                        )
                    })}

                </div>
                

            </div>
            
        {/* SHORTS */}
                <div className="shortsHeading">
                    {/* <img src={assets.playstationSolid} alt="" /> */}
                    <div className="mediaTube">
                        <div className="mediaImg">
                            <img src={assets.playSolid} alt="" />
                        </div>
                    </div>
                    <p>Shorts</p>
                </div>
            <div className="shorts">
                <div className="feedBox">
                    {shorts.map((item, index)=>{
                        return(
                            <div>
                                <img className="feedBoxImg" src={`${item.snippet.thumbnails.standard.url}`} alt="" />
                                <div className="feedImg">
                                    <img src={`${item.snippet.thumbnails.standard.url}`} alt="" />
                                    <div>
                                        <h3>{`${item.snippet.title}`.slice(0, 20)}</h3>
                                        <h4>{`${item.snippet.channelTitle}`}</h4>
                                        <p>{convertValue(`${item.statistics.viewCount}`)} views &bull; {moment(`${item.snippet.publishedAt}`).fromNow()}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
                
            </div>

        {/* MIDDLE FEED */}
            <div className="bottomFeed">
                <div className="imgBtn">
                    <button>show more</button>
                    <img src={assets.more} alt="" />
                </div>
                <hr />
            </div>

            {/* BOTTOM FEEDS */}
            <div className="feeds" id="bottomFeed">

            <div className="feedBox">
                    {data.map((item, index) =>{
                        return (
                            <Link key={item.id} to={`video/${item.snippet.categoryId}/${item.id}`} style={{textDecoration: "none", color: "black"}}>
                            <img className="feedBoxImg" src={`${item.snippet.thumbnails.standard.url}`} alt="" key={index}/>
                            <div className="feedImg">
                                <img src={`${item.snippet.thumbnails.standard.url}`} alt="" />
                                <div >
                                <h3>{`${item.snippet.title}`.slice(0, 30)}</h3>
                                <h4>{`${item.snippet.channelTitle}`}</h4>
                                <p>{convertValue(`${item.statistics.viewCount}`)} views &bull; {moment(`${item.snippet.publishedAt}`).fromNow()}</p>
                            </div>
                            </div>
                            </Link>
                        )
                    })}

                </div>
                {/* <div className="feedBox">
                    <img className="feedBoxImg" src={assets.image2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.amandla} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.image2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.images1} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.image2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.image2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.image2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.image2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.image2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.image2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.image2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.amandla} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.image2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.images1} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.image2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.image2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.image2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.image2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.image2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div>
                <div className="feedBox">
                    <img className="feedBoxImg" src={assets.image2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
                </div> */}

            </div>

            
        </div>
    )
}

export default Feed;