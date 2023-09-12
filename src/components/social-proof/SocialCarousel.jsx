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
    <div className="carousel-container w-full h-96 bg-blue-200 absolute right-10">
      <div className="carousel-paragraph">
        {carouselParagraphs.map((paragraph, index) => (
          <p
            key={index}
            className={index === currentIndex ? 'active' : ''}
          >
            <strong>{paragraph.name}</strong>: {paragraph.description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SocialCarousel;
