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
    <div className='search m-4 absolute top-2  '>
         
      <input className='text-center pt-2'
        type="text"
        placeholder="search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button className='   rounded-md text-2xl pb-2' onClick={handleSearch}><ion-icon  name="search-outline"></ion-icon></button>
    </div>
  );
};

export default Search;