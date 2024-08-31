import React from "react";
import './NavBar.css'
import assets from "../../assets/assets";

const NavBar = () => {
    return(
        <div className="mainNavBar">
            <div className="leftNav">
                <img src={assets.menuBar} alt="" />
                <div>
                    <img src={assets.playSolid} alt="" />
                </div>
                <p>mediaTube</p>
            </div>

            <div className="middleNav">
                <div>
                <input type="text" />
                <img src={assets.glassSolid} alt="" />
                </div>
                <img src={assets.microphoneSolid} alt="" />
            </div>

            <div className="rightNav">
                <img src={assets.videoSolid} alt="" />
                <div>
                    <img src={assets.bellSolid} alt="" />
                    <p>9+</p>
                </div>
                <img src={assets.image2} alt="" />
            </div>
        </div>
    )
}


export default NavBar;