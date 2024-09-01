import React, { useState } from 'react';
import assets from '../../assets/assets'; // Adjust the path as needed

function TopBar() {
  // State to track the current index of the first visible button
  const [startIndex, setStartIndex] = useState(0);

  // Array of button labels for dynamic rendering
  const buttons = [
    'all', 'JavaScript', 'Gaming', 'Game shows', 'Databases',
    'Software Development', 'Music', 'Action thrillers', 'Algorithms',
    'Thrillers', 'Nollywood', 'Server', 'E-commerce', 'Podcasts',
    'Editing', 'Live', 'News', 'Sketch comedy', 'Recently uploaded',
    'Watched', 'New to you'
  ];

  // Handle clicking the "less than" image
  const handleScrollLeft = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  // Handle clicking the "greater than" image
  const handleScrollRight = () => {
    if (startIndex < buttons.length - 1) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="topBar">
      <div className="mainBar">
        {/* "less than" image to scroll left */}
      <img 
        src={assets.lessThan} 
        alt="Scroll Left" 
        onClick={handleScrollLeft} 
        className={startIndex === 0 ? 'hidden' : ''}
        id="lessThan"
      />
      <div className="buttons">
        <div>
            {/* Dynamically render buttons based on the current startIndex */}
        {buttons.slice(startIndex, startIndex + 17).map((button, index) => (
          <button key={index}>{button}</button>
        ))}
        </div>
      </div>
      {/* "greater than" image to scroll right */}
      <img 
        src={assets.greater} 
        alt="Scroll Right" 
        onClick={handleScrollRight} 
        className={startIndex >= buttons.length - 10 ? 'hidden' : ''}
      />
      </div>
    </div>
  );
}

export default TopBar;
