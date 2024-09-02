import React from "react";
import './NavBar.css'
import assets from "../../assets/assets";
import { Link } from "react-router-dom";

const NavBar = ({showName, setShowName}) => {

    const handleTogle = () => {
        setShowName(!showName)
    }

    return(
        <div className="mainNavBar">
            <div className="leftNav">
                <img onClick={handleTogle} src={assets.menuBar} alt="" />
                <Link to={"/home"}>
                    <div className="playIcon">
                        <img src={assets.playSolid} alt="" />
                    </div>
                </Link>
                    <Link to={"/"} style={{ textDecoration: 'none' }}><p>mediaTube</p></Link>
                
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