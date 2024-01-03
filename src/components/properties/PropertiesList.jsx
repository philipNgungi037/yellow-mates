// PropertiesList.js

import React, { useState } from "react";
import Header from "../landing-page/header/Header";
import Footer from "../landing-page/footer/Footer";
import homes from "../landing-page/properties/propertiesData";
import Pagination from "../re-usable-components/Pagination";
import './properties-list.css'
import { Link } from "react-router-dom";


const PropertiesList = () => {
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentHomes = homes.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <>
        <h2 className='text-center text'>AFFORDABLE PLOTS FOR SALE WITHIN NAIROBI & kiambu</h2>
        <p>We offer affordable and genuine land for sale along Kangundo Road, Eastern Bypass, Mombasa Road and along Thika Road with Ready Title Deeds..</p>
      </>
      <div className="bg-white grid md:grid-cols-2 gap-4 lg:gap-8 space-y-8 md:space-y-0 mt-8 md:mt-0 w-full m-auto p-0 md:p-8 lg:p-16">
        {currentHomes.map((home, index) => (
           <Link to={`/property/${home.id}`} key={home.id}>
          <div key={index} className="h relative text-xs sm:text-sm">
            <img src={home.type.image} alt={home.type.title} className="w-full h-[300px]" />
            <div className="bg-yellow-400 w-full absolute sm:relative lg:absolute bottom-0">
              <h1 className="text-white">{home.type.title}</h1>
              <p>{home.location}</p>
              <p>{home.price}</p>
              <p>
                <ion-icon name="location-outline" />
              </p>
              <p className="col-span-2 border-t">{home.description}</p>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <Pagination pageCount={Math.ceil(homes.length / itemsPerPage)} onPageChange={handlePageChange} />
      <p className="text-center text-gray-600">
        Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, homes.length)} of {homes.length} items
      </p>
      <Footer />
    </div>
  );
};

export default PropertiesList;
