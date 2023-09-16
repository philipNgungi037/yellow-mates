import React from "react";
import imageData from "./organization-data";
import "./organization.css";

const Features = () => {
  return (
    <div className="features p-16  ">
      <h2> Neque porro quisquam est qui dolorem </h2>
      <div className="features-card flex justify-between gap-8 ">
        {imageData.map((item, index) =>
          
            <div key={index} className="relative flex flex-col items-center ">
              <a href="f">
              <img
                className=" feat-img  "
                src={item.image}
                alt={item.description}
              />
              <p className="item-category w-auto  text-center p-4 opacity-0.2  absolute top-72">
                {item.category}
              </p>
              </a>
              <p>
                {item.description}
              </p>
              <button><p className="features-button text-sm text-blue-400 p-2  text-center">LEARN MORE</p></button>

              
            </div>
          
        )}
      </div>
    </div>
  );
};

export default Features;
