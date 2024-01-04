// SimilarPropertiesList.js
import React from 'react';

const SimilarProperties = ({ similarProperties }) => {
  // Ensure that singleProperty is defined before using it
  if (similarProperties.length === 0) {
    return <div>No similar properties found</div>;
  }


  return (
    <div className='bg- text-center'>
      <h2 className="text-2xl font-bold mt-8 mb-4">Similar Properties({similarProperties.length}):</h2>
      <ul>
        {similarProperties.map((property) => (
          <li key={property.id} style={{fontSize: 24, margin: '0 auto', textAlign: 'center'}} >
            {/* Display information about similar properties */}
            {property.type.title}, {property.location}, {property.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimilarProperties;
