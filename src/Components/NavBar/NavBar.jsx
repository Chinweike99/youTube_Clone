import React from "react";
import './NavBar.css'
import assets from "../../assets/assets";

const NavBar = () => {
    return(
        <div className="mainNavBar">
            <div className="leftNav">
                <img src={assets.menuBar} alt="" />
                <div className="playIcon">
                    <img src={assets.playSolid} alt="" />
                </div>
                <p>mediaTube</p>
            </div>

            <div className="middleNav">
                <div className="navInput">
                    <input type="text" placeholder="Search video"/>
                    <img src={assets.glassSolid} alt="" />
                </div>
                <div className="micDiv">
                    <img className="mic" src={assets.microphoneSolid} alt="" />
                </div>
            </div>

            <div className="rightNav">
                <img className="videoImg" src={assets.videoSolid} alt="" />
                <div className="notification">
                    <img src={assets.bellSolid} alt="" />
                    <p>9+</p>
                </div>
                <img className="userIcon" src={assets.image2} alt="" />
            </div>
        </div>
    )
}


export default NavBar;