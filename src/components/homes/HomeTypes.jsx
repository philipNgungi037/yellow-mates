import React from 'react';
import homes from './homesData';

const HomeTypes = () => {

    
  // Extract unique home types
  const uniqueTypes = [...new Set(homes.map((home) => home.type.title))];

  return (
    <div className="home-types p-4 sm:p-16">
      <h2>Search Land and their Types</h2>
      <ul className='sm:flex items-baseline justify-between gap-4 space-y-4'>
        {uniqueTypes.map((type, index) => (
          <li key={index}>
            <a href='home-types-link'>
            <div className="home-type relative  shadow-lg sm:shadow-none shadow-yellow-400 ">
              <img src={homes.find((home) => home.type.title === type).type.image} alt='' className=' w-full sm:w-96  h-56'/>
               <label className='home-type-label absolute items-center  bottom-4 text-black p-2 text-center  w-1/2   '>{type}</label> 
            </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeTypes;
