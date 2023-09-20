import React, { useState, useEffect } from 'react';
import './SocialCarousel.css';
import carouselParagraphs from './CarouselParagraphs'; // Import the array of paragraphs

const SocialCarousel= () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselParagraphs.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="social-carousel w-full  absolute bottom-0 md:right-72 ">
      <div className="carousel-paragraph p-0 md:p-16 m-2 sm:p-4 bg-white z-50">
        <h1>About Clients </h1>
        {carouselParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className={index === currentIndex ? 'active' : ''}
          >
            
            "{paragraph.description}....." <span className='block text-xs sm:text-lg p-2 sm:p-8 '>
             <strong>{paragraph.name}</strong>
             </span>
             
          </p>
        ))}
      </div>
    </div>
  );
};

export default SocialCarousel;
