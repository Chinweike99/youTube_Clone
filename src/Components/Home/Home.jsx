import React from "react";
import './Home.css'
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar"
import Feed from "../Feed/Feed";

const Home = () => {
    return(
        <div className="home">
            <SideBar />
            <div>
                <TopBar />
                <Feed />
            </div>
        </div>
    )
}


export default Home;