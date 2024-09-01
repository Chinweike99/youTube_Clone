import React from "react";
import './SideBar.css'
import assets from "../../assets/assets";

const SideBar = ({showName}) => {
    return(
        <div className={showName ? "sideBar" : "hideBar"}>
            <div className="mainBar">
                <div className="sideBarRoute">
                    <img src={assets.houseSolid} alt="" />
                    {showName && <span>Home</span>}
                </div>
                <div className="sideBarRoute">
                    <img src={assets.playstationSolid} alt="" />
                    {showName && <span>Shorts</span>}
                </div>
                <div className="sideBarRoute">
                    <img src={assets.hackerrankSolid} alt="" />
                    {showName && <span>Subscriptions</span>}
                </div>
            </div>

            <div >
                <div className="you">
                    <h3>You</h3> {showName && <img src={assets.greater} alt="" />}
                </div>
                <div className="mainBar">
                    <div className="sideBarRoute">
                        <img src={assets.channel} alt="" />
                        {showName && <span>Your Channel</span>}
                    </div>
                    <div className="sideBarRoute">
                        <img src={assets.history} alt="" />
                        {showName && <span>History</span>}
                    </div>
                    <div className="sideBarRoute">
                        <img src={assets.playList} alt="" />
                        {showName && <span>PlayList</span>}
                    </div>
                    <div className="yourVideos">
                        <div className="imgDiv">
                            <img src={assets.playSolid} alt="" />
                        </div>
                        {showName && <div>
                            <span>Your Videos</span>
                        </div>
                        }
                    </div>
                    <div className="sideBarRoute">
                        <img src={assets.watchLater} alt="" />
                        {showName && <span>Watch Later</span>}
                    </div>
                    <div className="sideBarRoute">
                        <img src={assets.thumbsUp} alt="" />
                        {showName && <span>Liked Videos</span>}
                    </div>
                </div>
            </div>
            <hr />

            
            <div className="subClass">
                {showName ? <h3 className="you">Subscriptions</h3> : <h3 className="you"></h3>}
                <div className="mainBar">
                    <div>
                        <img src={assets.image2} alt="" />
                        {showName && <span>TVC News</span>}
                    </div>
                    <div>
                        <img src={assets.img4} alt="" />
                        {showName && <span>Agent G9</span>}
                    </div>
                    <div>
                        <img src={assets.image4} alt="" />
                        {showName && <span>JavaScript Mastery</span>}
                    </div>
                    <div>                       
                        <img src={assets.image6} alt="" />
                        {showName && <span>FreeCodeCamp</span>}
                    </div>
                    <div>
                        <img src={assets.img6} alt="" />
                        {showName && <span>JennysLectures</span>}
                    </div>
                    <div>
                        <img src={assets.images3} alt="" />
                        {showName && <span>RoadSideCoder</span>}
                    </div>
                    <div className="showMore">
                        <img src={assets.more} alt="" />
                        {showName && <span>Show more</span>}
                    </div>
                </div>
            </div>
            <hr />

            <div>
                {showName ?<h3 className="you">Explore</h3>:<h3 className="you"></h3> }
                <div className="mainBar">
                    <div>
                        <img src={assets.trends} alt="" />
                        {showName && <span>Trending</span>}
                    </div>
                    <div>
                        <img src={assets.musicSolid} alt="" />
                        {showName && <span>Music</span>}
                    </div>
                    <div>
                        <img src={assets.gamepadSolid} alt="" />
                        {showName && <span>Gaming</span>}
                    </div>
                    <div>                       
                        <img src={assets.newsSolid} alt="" />
                        {showName && <span>News</span>}
                    </div>
                    <div>
                        <img src={assets.sport1} alt="" />
                        {showName && <span>Sport</span>}
                    </div>
                </div>
            </div>
            <hr />

            <div>
                {showName ? <h3 className="you">More from MediaTube</h3> : <h3 className="you"></h3>}
                <div className="mainBar">
                    <div className="mediaTube">
                        <div className="mediaImg">
                            <img src={assets.playSolid} alt="" />
                        </div>
                        {showName && <div>YouTube Premium</div>}
                    </div>
                    <div className="tubeMedia">
                        <div className="media1">
                            <div className="media2"><img src={assets.playSolid} alt="" /></div>
                        </div>
                        {showName && <div className="pTag">YouTube Studio</div>}
                    </div>
                    <div className="tubeMedia">
                        <div className="media1">
                            <div className="media2"><img src={assets.playSolid} alt="" /></div>
                        </div>
                        {showName && <div>YouTube Music</div>}
                    </div>
                    <div className="mediaTube mediaTube2">                       
                        <div className="mediaImg">
                            <img src={assets.playSolid} alt="" />
                        </div>
                        {showName && <div>YouTube Kids</div>}
                    </div>
                </div>
            </div>
            <hr />

            <div>
                <div className="you"></div>
                <div className="mainBar">
                    <div>
                        <img src={assets.settings} alt="" />
                        {showName && <span>Settings</span>}
                    </div>
                    <div>
                        <img src={assets.report} alt="" />
                        {showName && <span>Report history</span>}
                    </div>
                    <div>
                        <img src={assets.help} alt="" />
                        {showName && <span>Help</span>}
                    </div>
                </div>
            </div>
            <hr />

            <div className="bottomFooter">
            {showName && 
                <>
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
                </>   
                }
            </div>

        </div>
    )
}


export default SideBar;