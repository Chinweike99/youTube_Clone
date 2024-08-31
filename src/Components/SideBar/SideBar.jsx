import React from "react";
import './SideBar.css'
import assets from "../../assets/assets";

const SideBar = () => {
    return(
        <div className="sideBar">
            <div className="mainBar">
                <div className="sideBarRoute">
                    <img src={assets.houseSolid} alt="" />
                    <span>Home</span>
                </div>
                <div className="sideBarRoute">
                    <img src={assets.playstationSolid} alt="" />
                    <span>Shorts</span>
                </div>
                <div className="sideBarRoute">
                    <img src={assets.hackerrankSolid} alt="" />
                    <span>Subscriptions</span>
                </div>
            </div>

            <div >
                <div className="you">
                    <h3>You</h3> <img src={assets.greater} alt="" />
                </div>
                <div className="mainBar">
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
                    <div className="yourVideos">
                        <div className="imgDiv">
                            <img src={assets.playSolid} alt="" />
                        </div>
                        <div>
                            <span>Your Videos</span>
                        </div>
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

            
            <div className="subClass">
                <h3 className="you">Subscriptions</h3>
                <div className="mainBar">
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
                    <div className="showMore">
                        <img src={assets.more} alt="" />
                        <span>Show more</span>
                    </div>
                </div>
            </div>
            <hr />

            <div>
                <h3 className="you">Explore</h3>
                <div className="mainBar">
                    <div>
                        <img src={assets.trends} alt="" />
                        <span>Trending</span>
                    </div>
                    <div>
                        <img src={assets.musicSolid} alt="" />
                        <span>Music</span>
                    </div>
                    <div>
                        <img src={assets.gamepadSolid} alt="" />
                        <span>Gaming</span>
                    </div>
                    <div>                       
                        <img src={assets.newsSolid} alt="" />
                        <span>News</span>
                    </div>
                    <div>
                        <img src={assets.sport1} alt="" />
                        <span>Sport</span>
                    </div>
                </div>
            </div>
            <hr />

            <div>
                <h3 className="you">More from MediaTube</h3>
                <div className="mainBar">
                    <div className="mediaTube">
                        <div className="mediaImg">
                            <img src={assets.playSolid} alt="" />
                        </div>
                        <div>YouTube Premium</div>
                    </div>
                    <div className="tubeMedia">
                        <div className="media1">
                            <div className="media2"><img src={assets.playSolid} alt="" /></div>
                        </div>
                        <div className="pTag">YouTube Studio</div>
                    </div>
                    <div className="tubeMedia">
                        <div className="media1">
                            <div className="media2"><img src={assets.playSolid} alt="" /></div>
                        </div>
                        <div>YouTube Music</div>
                    </div>
                    <div className="mediaTube mediaTube2">                       
                        <div className="mediaImg">
                            <img src={assets.playSolid} alt="" />
                        </div>
                        <div>YouTube Kids</div>
                    </div>
                </div>
            </div>
            <hr />

            <div>
                <div className="you"></div>
                <div className="mainBar">
                    <div>
                        <img src={assets.settings} alt="" />
                        <span>Settings</span>
                    </div>
                    <div>
                        <img src={assets.report} alt="" />
                        <span>Report history</span>
                    </div>
                    <div>
                        <img src={assets.help} alt="" />
                        <span>Help</span>
                    </div>
                </div>
            </div>
            <hr />

            <div className="bottomFooter">
                <div className="footer1">
                    <span>About</span> <span>Press</span><span>Copyright</span>
                    <span>Contact us</span><span>Creator</span><span>Advertise</span>
                    <span>Developers</span>
                </div>
                <div className="footer1">
                    <span>Terms</span> <span>Privacy</span><span>Policy & Safety</span>
                    <span>How YouTube works</span><span>Test new features</span>
                </div>
                <div className="footer2">
                    <p>© 2024 Video LLC</p>
                </div>
            </div>

        </div>
    )
}


export default SideBar;