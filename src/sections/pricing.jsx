import React from "react";
// import { useState, useEffect } from "react";
import Button from "../components/button/buttonMain";
import bhk1 from '../assets/floor-plans/bhk1.jpg';
import bhk2 from '../assets/floor-plans/bhk2.jpg';
import bhk4 from '../assets/floor-plans/bhk3.jpg';

const Pricing = (/*{ setContactModal, contactmodal, formSubmitted }*/) => {
//   const [activeTab, setActiveTab] = useState(0);
//   const [isUnlocked, setIsUnlocked] = useState(false);


//   // Unlock pricing when form is submitted
//   useEffect(() => {
//     if (formSubmitted) {
//       setIsUnlocked(true);
//     }
//   }, [formSubmitted]);

//   // Handles switching between floor plans
//   const handleFloorPlan = (index) => {
//     setActiveTab(index);
//   };

  const propertyTypes = [
    { type: "1 BHK", price: "₹ 85 Lakhs ++*", size: "690 Sq.ft.", image: bhk1 },
    { type: "2 BHK", price: "₹ 1.40 Cr ++", size: "1140 Sq.ft.", image: bhk2 },
    { type: "3 BHK +2T", price: "₹ 1.80 Cr ++", size: "1480 Sq.ft.", image: bhk2 },
    { type: "3 BHK +3T", price: "₹ 2.20 Cr*", size: "1800 Sq.ft.", image: bhk1 },
    { type: "3 BHK +3T +HO", price: "₹ 2.55 Cr*", size: "2100 Sq.ft.", image: bhk4 },
    { type: "4 BHK +4T +HO", price: "₹ 3.55 Cr ++", size: "2700 Sq.ft.", image: bhk2 },
  ];

  return (
    <section id="Pricing" className="bg-PrestigeGrey py-10 md:pt-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-black w-full text-center font-subheading font-normal text-3xl md:text-5xl uppercase">
          Details
        </h2>

        <div className="flex flex-wrap justify-center gap-10 items-center py-10 px-10 lg:py-12">
          {propertyTypes.map((property, index) => (
            <div
              key={index}
              className="relative p-4 w-fit bg-white cursor-pointer border-2 border-PrestigeDarkGrey"
            //   onClick={() => handleFloorPlan(index)}
            >
              <img src={property.image} alt={property.type} className="w-100 mb-8" />

              <div className="font-semibold font-subheading text-xl md:text-2xl w-64 text-black">
                {property.type}
              </div>

              <div className="max-w-md relative text-black">
                <div className="text-xl pt-4 flex items-center font-normal">
                  <span className="text-lg md:text-xl">&bull;</span>{" "}
                  <span className={`text-lg md:text-xl `}>
                    Starting at: {property.price}
                  </span>
                </div>
                <div className="text-xl pt-4 flex items-center font-normal">
                  <span className="text-lg md:text-xl">&bull;</span>
                  <span className={`text-lg md:text-xl`}>
                    Size: {property.size}
                  </span>
                </div>

                <Button
                  text="Get Pricing"
                //   onClick={() => setContactModal(!contactmodal)}
                  className="absolute w-max top-1/2 right-0 transform -translate-y-1/2 px-6 py-3 text-center font-body font-semibold text-sm sm:text-base transition-all duration-300 ease-in-out"
                  showArrow={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
