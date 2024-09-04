import React, {useState} from "react";
import './Recommended.css'
import assets from "../../assets/assets";
import { Link } from "react-router-dom";

const Recommended = () => {

    const buttons = [
        { label: 'all', path: '/all' },
        { label: 'sketch', path: '/sketch' },
        { label: 'javascript', path: '/javascript' },
        { label: 'Reactjs', path: '/reactjs' },
    ];

    const [visibleIndex, setVisibleIndex] = useState(0);

    const handleScrollLeft = () => {
        if (visibleIndex > 0) {
            setVisibleIndex(visibleIndex - 1);
        }
    };

    const handleScrollRight = () => {
        if (visibleIndex < buttons.length - 2) {
            setVisibleIndex(visibleIndex + 1);
        }
    };



    return(
        <div className="recommended">
            <div className="nextScroll">
            <img src={assets.lessThan} alt="Scroll Left" onClick={handleScrollLeft} />
            <div className="scrollBtn">
                {buttons.slice(visibleIndex, visibleIndex + 3).map((button, index) => (
                    <Link key={index} to={button.path}>
                        <button>{button.label}</button>
                    </Link>
                ))}
            </div>
            <img src={assets.greater} alt="Scroll Right" onClick={handleScrollRight} />
            </div>

            <div className="maindiv1">
                <img src={assets.Ai} alt="" />
                <div className="channelInfo">
                    <div className="dotsDiv">
                        <h3>All About Artificial creativity</h3>
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <h4>Chinwe</h4>
                    <p>124k views &bull; 1 day ago</p>
                </div>
            </div>
            <div className="maindiv1">
                <img src={assets.Ai} alt="" />
                <div className="channelInfo">
                    <div className="dotsDiv">
                        <h3>All About Artificial Intelligence</h3>
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <h4>Chinwe</h4>
                    <p>124k views &bull; 1 day ago</p>
                </div>
            </div>
            <div className="maindiv1">
                <img src={assets.Ai} alt="" />
                <div className="channelInfo">
                    <div className="dotsDiv">
                        <h3>All About Artificial Intelligence</h3>
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <h4>Chinwe</h4>
                    <p>124k views &bull; 1 day ago</p>
                </div>
            </div>
            <div className="maindiv1">
                <img src={assets.Ai} alt="" />
                <div className="channelInfo">
                    <div className="dotsDiv">
                        <h3>All About Artificial Intelligence</h3>
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <h4>Chinwe</h4>
                    <p>124k views &bull; 1 day ago</p>
                </div>
            </div>
            <div className="maindiv1">
                <img src={assets.Ai} alt="" />
                <div className="channelInfo">
                    <div className="dotsDiv">
                        <h3>All About Artificial Intelligence</h3>
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <h4>Chinwe</h4>
                    <p>124k views &bull; 1 day ago</p>
                </div>
            </div>
            <div className="maindiv1">
                <img src={assets.Ai} alt="" />
                <div className="channelInfo">
                    <div className="dotsDiv">
                        <h3>All About Artificial Intelligence</h3>
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <h4>Chinwe</h4>
                    <p>124k views &bull; 1 day ago</p>
                </div>
            </div>
            <div className="maindiv1">
                <img src={assets.Ai} alt="" />
                <div className="channelInfo">
                    <div className="dotsDiv">
                        <h3>All About Artificial Intelligence</h3>
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <h4>Chinwe</h4>
                    <p>124k views &bull; 1 day ago</p>
                </div>
            </div>
            <div className="maindiv1">
                <img src={assets.Ai} alt="" />
                <div className="channelInfo">
                    <div className="dotsDiv">
                        <h3>All About Artificial Intelligence</h3>
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <h4>Chinwe</h4>
                    <p>124k views &bull; 1 day ago</p>
                </div>
            </div>
            <div className="maindiv1">
                <img src={assets.Ai} alt="" />
                <div className="channelInfo">
                    <div className="dotsDiv">
                        <h3>All About Artificial Intelligence</h3>
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <h4>Chinwe</h4>
                    <p>124k views &bull; 1 day ago</p>
                </div>
            </div>
            <div className="maindiv1">
                <img src={assets.Ai} alt="" />
                <div className="channelInfo">
                    <div className="dotsDiv">
                        <h3>All About Artificial Intelligence</h3>
                        <div className="dots">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <h4>Chinwe</h4>
                    <p>124k views &bull; 1 day ago</p>
                </div>
            </div>
        </div>
    )
}


export default Recommended;