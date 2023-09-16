import React, { useState } from 'react';
import homes from './homesData';

const Homes = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition(scrollPosition - 1);
  };

  const scrollRight = () => {
    setScrollPosition(scrollPosition + 1);
  };

  // Calculate the maximum number of cards to display at once
  const maxVisibleCards = 3;

  // Calculate the total number of cards
  const totalCards = homes.length;

  // Calculate the range of cards to display
  const startIndex = scrollPosition * maxVisibleCards;
  const endIndex = Math.min(startIndex + maxVisibleCards, totalCards);

  // Slice the homes array to display only the visible cards
  const visibleHomes = homes.slice(startIndex, endIndex);

  return (
    <div className='homes-container relative h-auto p-16'>
      <h2 className='text-center'>Real-Deal Homes Listings</h2>
      <div className='homes-scroll-container'>
        <div className='homes-wrapper grid grid-cols-3 gap-4 '>
          {visibleHomes.map((home, index) => (
            <div key={index} className='home-card relative'>
              <img src={home.type.image} alt={home.type.title} />
              <div className='card-text  absolute bottom-0 grid grid-cols-2 '>
                <h1>{home.type.title}</h1>
                <p>{home.location}</p>
                
                <p>{home.price}</p>
                <p><ion-icon name="location-outline"></ion-icon></p>
                <p className='col-span-2 border-t'>{home.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll buttons */}
      <div className='scroll-buttons flex justify-between text-4xl mt-2'>
        <button
          className='scroll-left'
          onClick={scrollLeft}
          disabled={scrollPosition === 0}
        >
          <ion-icon name="arrow-back-outline"></ion-icon>
        </button>
        <button
          className='scroll-right'
          onClick={scrollRight}
          disabled={endIndex >= totalCards}
        >
         <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default Homes;
