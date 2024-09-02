import React from "react";
import './Home.css'
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar"
import Feed from "../Feed/Feed";

const Home = ({showName, setShowName}) => {
    return(
        <div className="home">
            <SideBar showName={showName}/>
            <div id="middleHome" className={showName? "middleBar" : "null"}>
                <TopBar />
                <Feed showName={showName}/>
            </div>
        </div>
    )
}


export default Home;