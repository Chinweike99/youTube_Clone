import React, { useState } from 'react';
import assets from '../../assets/assets'; // Adjust the path as needed
import './TopBar.css'
import { Link } from 'react-router-dom';
import { buttons } from '../value';


function TopBar({setCategory, showName}) {
  // State to track the current index of the first visible button
  const [startIndex, setStartIndex] = useState(1);
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;


  const fetchVideos = async (categoryId) => {
    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&videoCategoryId=${categoryId}&key=${API_KEY}`;
    
    const response = await fetch(videoUrl);
    const data = await response.json();
    setVideos(data.items); // This updates the video list in the parent component
  };



  // Handle clicking the "less than" image
  const handleScrollLeft = () => {
    if (startIndex > 1) {
      setStartIndex(startIndex - 1);
    }
  };

  // Handle clicking the "greater than" image
  const handleScrollRight = () => {
    if (startIndex < buttons.length - 14) {
      setStartIndex(startIndex + 1);
    }
  };


  return (
    <div className="topBar" >
        <div className="mainBar">
          {/* "less than" image to scroll left */}
          <div className='imgDiv'>
            <img 
              src={assets.lessThan} 
              alt="Scroll Left" 
              onClick={handleScrollLeft} 
              className={startIndex === 0 ? 'hidden' : ''}
              id="lessThan"
            />
          </div>
            <div className="buttons">
                <div className='divBtns'>
                  {/* Dynamically render buttons based on the current startIndex */}
                  {buttons.slice(startIndex, startIndex + 15).map((button, index) => (
                    <Link key={index} to={button.path}>
                        <button
                          onClick={() => {
                            setCategory(button.categoryId);
                            fetchVideos(button.categoryId); 
                          }}
                        >{button.label}</button>
                    </Link>
                  
                  ))}
                </div>
            </div>
          {/* "greater than" image to scroll right */}
          <div className='imgDiv'>
            <img 
              src={assets.greater} 
              alt="Scroll Right" 
              onClick={handleScrollRight} 
              className={startIndex >= buttons.length - 10 ? 'hidden' : ''}
              id='rightImg'
            />
          </div>
      </div>
    </div>
  );
}

export default TopBar;
