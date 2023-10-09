import React from "react";
import imageData from "./folder-data";
import whyUsLists from "./why-us-data";

const WhyUs = () => {
  const myImage = imageData[0];
  return (
    <div className="why-us-outer">
      <h2 className="p-8">Why Reach to us</h2>
      <div className="why-us-inside sm:flex justify-between">

        {/* //left-side for image// */}
        <div className="why-us-img relative">
          <img src={myImage.image} alt={myImage.description} className="" />
          <div className='why-us-label absolute left-2 xs:left-8  bottom-24 xs:top-52 sm:top-32 w-full  bg-yellow-400 '>
            <h1 className="text-black text-sm sm:2xl text-left lg:text-4xl p-2 sm:p-4 w-full">Buy Affordable Land With Us</h1>
          </div>
        </div>

        {/*right-side with content*/}
        <div className="why-us-content  ">
          {whyUsLists.map((list, index) =>
            <div key={index} className="flex">
              <span className="p-2 text-sm lg:text-4xl text-yellow-400"><ion-icon name="checkmark-circle-outline"></ion-icon></span>
              <h3 className="p-2 text-">{list}</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
