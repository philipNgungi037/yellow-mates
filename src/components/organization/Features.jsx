import React from "react";
import imageData from "./organization-data";
import "./organization.css";

const Features = () => {
  return (
    <div className="features p-4 sm:p-16  ">
      <h2> Neque porro quisquam est qui dolorem </h2>
      <div className="features-card space-y-8 sm:flex justify-between items-baseline   sm:gap-2 overflow-hidden sm:overflow-x-scroll  lg:overflow-hidden">
        {imageData.map((item, index) =>
          <div key={index} className="relative flex  flex-col items-center ">
            <a href="f">
              <img
                className=" feat-img   "
                src={item.image}
                alt={item.description}
              />
              <p className="item-category w-auto  text-center p-4 sm:p-2 lg:p-4 sm:text-sm lg:text-lg hover:text-white  absolute top-72">
                {item.category}
              </p>
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
