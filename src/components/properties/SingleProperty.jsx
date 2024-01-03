// SinglePropertyPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import homes from "../landing-page/properties/propertiesData";

// this component uses (useParams) to display each property/home/item in a single page at a time,
const SingleProperty = () => {
  const { id }  = useParams();
  const singleProperty = homes.find((property) => property.id === id);
  console.log(singleProperty)

  if (!singleProperty) {
    return <div>Property not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <img src={singleProperty.type.image} alt={singleProperty.type.title} className="md:w-1/3 rounded-lg shadow-md" />
        <div className="md:ml-8">
          <h1 className="text-3xl font-bold mb-2">{singleProperty.type.title}</h1>
          <p className="text-gray-700 mb-4">{singleProperty.description}</p>
          <h2 className="text-xl font-bold mb-2">Location:</h2>
          <p className="text-gray-700 mb-4">{singleProperty.location}</p>
          <h2 className="text-xl font-bold mb-2">Price:</h2>
          <p className="text-gray-700 mb-4">{singleProperty.price}</p>
          <button className="border border-black text-white font-bold py-2 px-4 rounded-full">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleProperty;
