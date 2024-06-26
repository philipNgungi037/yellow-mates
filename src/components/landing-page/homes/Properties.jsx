import React, { useState } from "react";
import homes from "./homesData";
import Search from "../hero-section/Search";

import { Link } from "react-router-dom";

const Homes = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    setScrollPosition(scrollPosition - 1);
  };

  const scrollRight = () => {
    setScrollPosition(scrollPosition + 1);
  };

  // Calculate the maximum number of cards to display at once
  const maxVisibleCards = 3;

  // Calculate the total number of cards
  const totalCards = homes.length;

  // Calculate the range of cards to display
  const startIndex = scrollPosition * maxVisibleCards;
  const endIndex = Math.min(startIndex + maxVisibleCards, totalCards);

  // Slice the homes array to display only the visible cards
  const visibleHomes = homes.slice(startIndex, endIndex);

  return (
    <div className="homes-container relative h-auto p-0 lg:p-16 ">
      <div className="py-8">
        <h2 className="text-center text">
          AFFORDABLE PLOTS FOR SALE WITHIN NAIROBI & kiambu
        </h2>
        <p>
          We offer affordable and genuine land for sale along Kangundo Road
          ,Eastern Bypass, Mombasa Road and along Thika Road with Ready Title
          Deeds..<span>
            <Search />
          </span>
        </p>
      </div>
      <div className="homes-scroll-container">
        <div className="homes-wrapper w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 rounded-md ">
          {visibleHomes.map((home, index) =>
            <div key={index} className="home-card text-xs sm:text-sm rounded-md bg-yellow-400">
              <img src={home.type.image} alt={home.type.title} className=" w-full h-[111px] sm:h-[200px] md:h-[280px] " />
              {/* <div className="card-text w-full grid grid-cols-2 rounded-md "> */}
                <h1 className="text-white ">
                  {home.type.title}
                </h1>
                <p>
                  {home.location}
                </p>

                <p>
                  {home.price}
                </p>
                {/* <p>
                  <ion-icon name="location-outline" />
                </p> */}
                <p className="col-span-2 border-t">
                  {home.description}
                </p>
              {/* </div> */}
            </div>
          )}
        </div>
      </div>

      {/* Scroll buttons */}
      <div className="scroll-buttons flex justify-between text-4xl mt-2">
        <button
          className="scroll-left"
          onClick={scrollLeft}
          disabled={scrollPosition === 0}
        >
          <ion-icon name="arrow-back-outline" />
        </button>

        {/**search-bar */}
        <Link to="properties">
          <button className="text-xs sm:text-xl">View All</button>
        </Link>
        <button
          className="scroll-right"
          onClick={scrollRight}
          disabled={endIndex >= totalCards}
        >
          <ion-icon name="arrow-forward-outline" />
        </button>
      </div>
    </div>
  );
};

export default Homes;
