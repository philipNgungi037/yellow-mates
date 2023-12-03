import React, { useState, useEffect } from "react";
import CarouselImages from "./CarouselImages";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);



  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % CarouselImages.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex(
      prevIndex => (prevIndex === 0 ? CarouselImages.length - 1 : prevIndex - 1)
    );
  };

  // Automatically move to the next image every 1... secs
  useEffect(() => {
    const interval = setInterval(nextImage, 5900);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel w-full ">
      <img
        src={CarouselImages[currentIndex].imageUrl}
        alt={CarouselImages[currentIndex].title}
        className="carousel-img w-full relative bg-cover "
      />
      <div className="carousel-img-details absolute top-32 text-black px-0 md:px-48 text-center w-full  m-auto py-4 sm:py-8 lg:py-16 ">
        <h1 className="carousel-img-title text-xl sm:text-2xl lg:text-4xl">
          {CarouselImages[currentIndex].title}
        </h1>
        <p className="carousel-img-location">
          {CarouselImages[currentIndex].description}
        </p>
        <p className="carousel-img-offer text-white">
        {CarouselImages[currentIndex].offer}
        </p>
        {/* <img src={CarouselImages[currentIndex].image2Url} alt="" className="w-full"/> */}
      </div>
      {/* <div className="w-full why-us-label mt-8 h-48 absolute top- p-4 bg-yellow-400">

      </div> */}
      <div className="carousel-buttons text-xl sm:text-2xl lg:text-4xl flex justify-between ">
        <button onClick={nextImage}>
          <ion-icon name="chevron-back-outline" />
        </button>
        <button onClick={prevImage}>
          <ion-icon name="chevron-forward-outline" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
