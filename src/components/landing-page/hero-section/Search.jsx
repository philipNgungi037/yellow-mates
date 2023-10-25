import React, { useState } from 'react';
import './search.css'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here using the 'searchQuery' state
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className='search w-full  pt-4 '>
      <input className='text-center p-2 text-xs sm:text-2xl  relative bg-yellow-200 rounded-sm  '
        type="text"
        placeholder="search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button className='bg-yellow-200 p-2 text-xs sm:text-2xl ' onClick={handleSearch}><ion-icon  name="search-outline"></ion-icon></button>
    </div>
  );
};

export default Search;