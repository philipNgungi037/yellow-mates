import React, { useState } from 'react';

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
    <div className='search bg-blue-400 m-4'>
         <button className='   rounded-md text-2xl pb-2' onClick={handleSearch}><ion-icon  name="search-outline"></ion-icon></button>
      <input className='text-center pt-2'
        type="text"
        placeholder="search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;