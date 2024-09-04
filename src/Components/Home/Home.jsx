import React, { useState } from "react";
import './Home.css'
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar"
import Feed from "../Feed/Feed";

const Home = ({showName}) => {

    const [category, setCategory] = useState(0)

    return(
        <div className="home">
            <SideBar showName={showName} category={category} setCategory={setCategory}/>
            <div id="middleHome" className={showName? "middleBar" : "null"}>
                <TopBar category={category}/>
                <Feed showName={showName} category={category} />
            </div>
        </div>
    )
}


export default Home;