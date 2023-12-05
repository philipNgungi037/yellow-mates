import React, { useState, useEffect } from 'react';

const BackTop = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percentage = (scrollTop / totalHeight) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed bottom-8 md:bottom-16 right-4 bg-yellow-700 animate-pulse       p-4 shadow-2xl shadow-yellow-400   ${scrollPercentage <20 ? 'hidden' : ''}`}
      title="Back to top"
      onClick={handleScrollTop}
    >
      <svg width="40" height="40" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="#ccc"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="20"
          cy="20"
          r="16"
          stroke="#ffff00"
          strokeWidth="4"
          fill="none"
          strokeDasharray="100"
          strokeDashoffset={100 - scrollPercentage}
        />
        <path
          d="M 12 22 l 8 -8 l 8 8"
          fill="none"
          stroke="#007aff"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default BackTop;