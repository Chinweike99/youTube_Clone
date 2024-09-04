import React from "react";
import './Feed.css'
import assets from "../../assets/assets";
import { Link } from "react-router-dom";

const Feed = ({showName, category}) => {
    return (
        <div className={!showName ? "mainFeed" : null}>
            <div className="feeds">
                <div className="feedBox">
                    <Link to={`video/20/4512`} style={{textDecoration: "none", color: "black"}}>
                        <img className="feedBoxImg" src={assets.image2} alt="" />
                        <div className="feedImg">
                            <img src={assets.amandla} alt="" />
                            <div >
                            <h3>Find Love with us, on our game</h3>
                            <h4>Weike</h4>
                            <p>20k views &bull; 2 days ago</p>
                        </div>
                        </div>
                        </Link>
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
                    <img className="feedBoxImg" src={assets.image6} alt="" />
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
                    <img className="feedBoxImg" src={assets.img1} alt="" />
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
                    <img className="feedBoxImg" src={assets.img2} alt="" />
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
                    <img className="feedBoxImg" src={assets.img3} alt="" />
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
                    <img className="feedBoxImg" src={assets.images3} alt="" />
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
                    <img className="feedBoxImg" src={assets.Ai2} alt="" />
                    <div className="feedImg">
                        <img src={assets.amandla} alt="" />
                        <div>
                        <h3>FInd Love with us, on our game</h3>
                        <h4>Weike</h4>
                        <p>20k views &bull; 2 days ago</p>
                    </div>
                    </div>
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
            <div className="feeds">
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
                </div>

            </div>

            
        </div>
    )
}

export default Feed;