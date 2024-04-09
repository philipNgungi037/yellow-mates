// PropertiesList.js

import React, { useState } from "react";
import Header from "../landing-page/header/Header";
import Footer from "../landing-page/footer/Footer";
import homes from "../../data/properties/propertiesData";
import Pagination from "../re-usable-components/Pagination";
import './properties-list.css'
import { Link } from "react-router-dom";


const PropertiesList = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentHomes = homes.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-white">
      <>
        <h2 className='text-center text-xs xs:text-sm md:text-xl'>AFFORDABLE PLOTS FOR SALE WITHIN NAIROBI & kiambu</h2>
        <p className="text-xs xs:text-sm md:text-xl">We offer affordable and genuine land for sale along Kangundo Road, Eastern Bypass, Mombasa Road and along Thika Road with Ready Title Deeds..</p>
      </>
      <div className="bg-white grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 p-0 xs:p-4 md:p-16 mt-2 ">
        {currentHomes.map((home, index) => (
          <Link to={`/property/${home.id}`} key={home.id}>
            <div key={index} className="h relative text-xs sm:text-sm bg-yellow-400 rounded-md">
              <img src={home.type.image} alt={home.type.title} className="w-full h-[111px] sm:h-[200px] md:h-[280px]" />
              {/* <div className="bg-yellow-400 w-full absolute sm:relative lg:absolute bottom-0"> */}
                <h1 className="text-white">{home.type.title}</h1>
                <p>{home.location}</p>
                <p>{home.price}</p>
                {/* <p>
                  <ion-icon name="location-outline" />
                </p> */}
                <p className="col-span-2 border-t">{home.description}</p>
              {/* </div> */}
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
