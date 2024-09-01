import React from "react";
import './TopBar.css'
import assets from "../../assets/assets";

const TopBar = () => {
    return(
        <div className="topBar">
            <div className="buttons">
                <img src={assets.lessThan} alt="" />
                <button>all</button>
                <button>JavaScript</button>
                <button>Gaming</button>
                <button>Game shows</button>
                <button>Databases</button>
                <button>Software Developtment</button>
                <button>Music</button>
                <button>Action thrillers</button>
                <button>Algorithms</button>
                <button>Thrillers</button>
                <button>Nollywood</button>
                <button>Server</button>
                <button>E-commerce</button>
                <button>Podcasts</button>
                <button>Editing</button>
                <button>Live</button>
                <button>News</button>
                <button>Sketch comedy</button>
                <button>Recently uploaded</button>
                <button>Watched</button>
                <button>New to you</button>
                
                <img src={assets.greater} alt="" />
            </div>
        </div>
    )
}


export default TopBar;