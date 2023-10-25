import React from 'react';
import imageData from '../organization/folder-data';

const SocialImage = () => {
  // Get the first image data from the array
  const firstImageData = imageData[0];

  return (
    <div className='social-image w-full h-auto absolute'>
      {/* Render the first image */}
      <img src={firstImageData.image} alt={firstImageData.description}  className='social-img w-full '/>
    </div>
  );
}

export default SocialImage;
