import React from 'react';
import homes from './homesData';

const HomeTypes = () => {

    
  // Extract unique home types
  const uniqueTypes = [...new Set(homes.map((home) => home.type.title))];

  return (
    <div className="home-types flex flex-col p-16">
      <h2>Home Types</h2>
      <ul className='flex justify-between '>
        {uniqueTypes.map((type, index) => (
          <li key={index}>
            <a href='home-types'>
            <div className="home-type relative shadow-md shadow-black">
              <img src={homes.find((home) => home.type.title === type).type.image} alt='' className='w-96  h-56'/>
               <label className='absolute bottom-4 text-black p-2 text-center bg-blue-300 w-full   '>{type}</label> 
            </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeTypes;
