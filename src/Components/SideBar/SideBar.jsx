import React from "react";
import './SideBar.css'
import assets from "../../assets/assets";

const SideBar = () => {
    return(
        <div>
            <div>
                <div>
                    <img src={assets.houseSolid} alt="" />
                    <span>Home</span>
                </div>
                <div>
                    <img src={assets.playstationSolid} alt="" />
                    <span>Shorts</span>
                </div>
                <div>
                    <img src={assets.hackerrankSolid} alt="" />
                    <span>Subscriptions</span>
                </div>
            </div>

            <div>
                <h3>You <img src={assets.greater} alt="" /></h3>
                <div>
                    <div>
                        <img src={assets.channel} alt="" />
                        <span>Your Channel</span>
                    </div>
                    <div>
                        <img src={assets.history} alt="" />
                        <span>History</span>
                    </div>
                    <div>
                        <img src={assets.playList} alt="" />
                        <span>PlayList</span>
                    </div>
                    <div>
                        <div>
                            <img src={assets.playSolid} alt="" />
                        </div>
                        <span>Your Videos</span>
                    </div>
                    <div>
                        <img src={assets.watchLater} alt="" />
                        <span>Watch Later</span>
                    </div>
                    <div>
                        <img src={assets.thumbsUp} alt="" />
                        <span>Liked Videos</span>
                    </div>
                </div>
            </div>
            <hr />

            
            <div>
                <h3>Subscriptions</h3>
                <div>
                    <div>
                        <img src={assets.image2} alt="" />
                        <span>TVC News</span>
                    </div>
                    <div>
                        <img src={assets.img4} alt="" />
                        <span>Agent G9</span>
                    </div>
                    <div>
                        <img src={assets.image4} alt="" />
                        <span>JavaScript Mastery</span>
                    </div>
                    <div>                       
                        <img src={assets.image6} alt="" />
                        <span>FreeCodeCamp</span>
                    </div>
                    <div>
                        <img src={assets.img6} alt="" />
                        <span>JennysLectures</span>
                    </div>
                    <div>
                        <img src={assets.images3} alt="" />
                        <span>RoadSideCoder</span>
                    </div>
                </div>
            </div>
            <hr />


        </div>
    )
}


export default SideBar;