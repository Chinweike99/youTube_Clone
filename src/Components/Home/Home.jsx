import React from "react";
import './Home.css'
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar"
import Feed from "../Feed/Feed";

const Home = ({showName, setShowName}) => {
    return(
        <div className="home">
            <SideBar showName={showName}/>
            <div>
                <TopBar />
                <Feed />
            </div>
        </div>
    )
}


export default Home;