import React from "react";
import imageData from "./folder-data";
import "./organization.css";

const Features = () => {
  return (
    <div className="features p-4 sm:p-16  ">
      <h2>our team structure and services</h2>
      <div className="features-card space-y-8 sm:flex justify-between items-baseline   sm:gap-2 overflow-hidden sm:overflow-x-scroll  lg:overflow-hidden">
        {imageData.map((item, index) =>
          <div key={index} className="relative flex  flex-col items-center ">
            <a href="f">
              <img
                className=" feat-img   "
                src={item.image}
                alt={item.description}
              />
              <label className="item-category w-1/2 xs:w-auto text-right xs:text-center p-4  sm:p-2 lg:p-4 sm:text-sm lg:text-lg hover:text-white  absolute top-72">
                {item.category}
              </label>
            </a>
            <p className="px-8 sm:px-0">
              {item.description}
            </p>
            <button>
              <p className="features-button text-sm text-yellow-400 hover:text-black hover:border border-yellow-400 p-2  text-center">
                LEARN MORE
              </p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Features;
