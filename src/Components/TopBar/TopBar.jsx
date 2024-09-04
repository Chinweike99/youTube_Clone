import React, { useState } from 'react';
import assets from '../../assets/assets'; // Adjust the path as needed
import './TopBar.css'
import { Link } from 'react-router-dom';

function TopBar() {
  // State to track the current index of the first visible button
  const [startIndex, setStartIndex] = useState(1);

  // Array of button labels for dynamic rendering
  const buttons = [
    {label: 'all', path: '/all'},
    {label: 'JavaScript', path: '/JavaScript'},
    {label: 'Gaming', path: '/Gaming'},
    {label: 'Game shows', path: '/Game shows'},
    {label: 'Databases', path: '/Databases'},
    {label: 'Software Development', path: '/Software Development'},
    {label: 'Action thrillers', path: '/Action thrillers'},
    {label: 'Music', path: '/Music'},
    {label: 'Algorithms', path: '/Algorithms'},
    {label: 'Thrillers', path: '/Thrillers'},
    {label: 'Nollywood', path: '/Nollywood'},
    {label: 'Server', path: '/Server'},
    {label: 'E-commerce', path: '/E-commerce'},
    {label: 'Podcasts', path: '/Podcasts'},
    {label: 'Editing', path: '/Editing'},
    {label: 'Live', path: '/Live'},
    {label: 'News', path: '/News'},
    {label: 'Sketch comedy', path: '/Sketch comedy'},
    {label: 'Recently uploaded', path: '/Recently uploaded'},
    {label: 'Watched', path: '/Watched'},
    {label: 'New to you', path: '/New to you'},
  ];

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
    <div className="topBar">
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
                        <button >{button.label}</button>
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
