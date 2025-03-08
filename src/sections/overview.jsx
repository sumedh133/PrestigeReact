import React from 'react';
import image from '../assets/overview/overview.webp';
import Button from '../components/button/buttonMain';

export const Overview = ({ contactmodal, setContactModal }) => {
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-28 mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
          <span className="font-body font-bold text-xs md:text-lg ">
              Prestige Southern Star is a classic, cutting-edge apartment project, strategically located on Begur Road in South Bangalore.
          </span>
          <br /><br />
          
            <span>
              Spread across 42 acres, the project offers 4,300 luxury 2, 3, and 4 BHK apartments (975–2450 sq ft), launching in November 2024 with possession by December 2029. These Vaastu-compliant homes feature airy, well-lit designs, green landscapes, and serene water features.
            </span>
          </p>

          <Button
                text="Enquire Now!"
                className=""
                onClick={() => setContactModal(!contactmodal)}
              />
          
        </div>

        <div className="hidden md:flex flex-col items-center">
          <div className="w-full h-auto flex justify-center border-4 border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Prestige Southern Star"
              className="w-full max-w-xl h-auto max-h-[24rem]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
