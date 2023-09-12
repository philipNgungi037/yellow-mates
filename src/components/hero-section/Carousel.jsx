import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'assets/images/feat-img1.jpg',
    'assets/images/feat-img2.jpg',
    'assets/images/feat-img3.jpeg',
    // Add more image URLs as needed
  ];

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically move to the next image every 1 second
  useEffect(() => {
    const interval = setInterval(nextImage, 1000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel w-full ">
     
      <img src={images[currentIndex]} alt='' className='w-full h-96'/>
     <div className='carousel-buttons flex justify-between '>
     <button onClick={nextImage}>Next</button>
      <button onClick={prevImage}>Previous</button>
     </div>
    </div>
  );
};

export default Carousel;
