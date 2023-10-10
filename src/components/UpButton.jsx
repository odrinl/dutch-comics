import React, { useState } from 'react';

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Attach a scroll event listener to show/hide the button
  window.addEventListener('scroll', handleScroll);

  return (
    <button
      className={`top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      UP
    </button>
  );
};

export default UpButton;
