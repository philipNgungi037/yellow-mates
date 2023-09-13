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
    <div className='search m-4 absolute  w-full p-8'>
         
      <input className='text-center p-2 text-2xl relative'
        type="text"
        placeholder="search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button className='   bg-white p-2 text-2xl ' onClick={handleSearch}><ion-icon  name="search-outline"></ion-icon></button>
    </div>
  );
};

export default Search;