// SinglePropertyPage.js

import React from 'react';
import BookSite from '../re-usable-components/forms/BookSite';

const SingleProperty = ({singleProperty}) => {
  return (
    <div className=" mx-auto px-4 py-8 bg-white">
      <div className="flex flex-col md:flex-row">
        <img src={singleProperty.type.image} alt={singleProperty.type.title} className="w-full h-[300px] " />
        <div className="md:ml-8">
          <h1 className="text-3xl font-bold mb-2">{singleProperty.type.title}</h1>
          <p className="text-gray-700 mb-4">{singleProperty.description}</p>
          <h2 className="text-xl font-bold mb-2">Location:</h2>
          <p className="text-gray-700 mb-4">{singleProperty.location}</p>
          <h2 className="text-xl font-bold mb-2">Price:</h2>
          <p className="text-gray-700 mb-4">{singleProperty.price}</p>
          <button className="border border-black  font-bold py-2 px-4 rounded-full">
            Contact Agent
          </button>
        </div>
        <div>
          <BookSite />
        </div>
      </div>
    </div>
  );
}

export default SingleProperty;
