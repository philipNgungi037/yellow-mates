import React from 'react'
import SingleProperty from '../../components/properties/SingleProperty'
import { useParams } from 'react-router-dom';
import homes from '../../data/properties/propertiesData';
import SimilarProperties from '../../components/properties/SimilarProperties';
import Footer from '../../components/landing-page/footer/Footer';



const SinglePropertyPage = () => {

  //  (useParams) to display each property/home/item in a single page at a time,
  const { id } = useParams();
  const singleProperty = homes.find((property) => property.id === id);
  if (!singleProperty) {
    return <div>Property not found</div>;
  }

  // Filter properties with the same type
  const similarProperties = homes.filter(
    (property) => property.type.title === singleProperty.type.title && property.id !== singleProperty.id
  );

  // No similar properties found
  if (similarProperties.length === 0) {
    return  <div>Property not found</div>; 
  }

  return (
    <div className='bg-white'>
      <SingleProperty singleProperty={singleProperty} />
      <SimilarProperties similarProperties={similarProperties} />
      <Footer/>
    </div>
  )
}

export default SinglePropertyPage 