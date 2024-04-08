// SinglePropertyPage.js

import React from 'react';
import BookSite from '../re-usable-components/forms/BookSite';
// import Img from '../../../public/assets/images/Img';

const SingleProperty = ({ singleProperty }) => {

  return (
    <div className=" mx-auto px-4 py-8 bg-white">
      <div className="flex flex-col md:flex-row">
        <div className='w-1/2 h-[300px] bg-bg1-image relative '>
        {/* <img src={singleProperty.type.image} alt={singleProperty.type.title} className="w-full h-[300px] " /> */}
        {/* <img src='../../../public/assets/images/feat-img1.jpeg' alt='' className='w-full h-[300px] '/> */}
        </div>
        <div className="single-property-details md:ml-8 absolut left-0 bgyellow-400 p-4 flex flex-col h-[300px] text-left ">
          <h1 className="text-3xl font-bold mb-2">{singleProperty.type.title}</h1>
          <p className="text-gray-700 mb-4">{singleProperty.description}</p>
          <h2 className="text-xl font-bold mb-2">Location:</h2>
          <p className="text-gray-700 mb-4">{singleProperty.location}</p>
          <h2 className="text-xl font-bold mb-2">Price:</h2>
          <p className="text-gray-700 mb-4">{singleProperty.price}</p>
          <button className="border border-yellow-400  font-bold py-2 px-4 rounded-full">
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
