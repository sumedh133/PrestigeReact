import React, { useState } from "react";
import { Phone, Xmark } from "iconoir-react";
import logo from "../../assets/navbar/prestige-group-logo.svg";
import arrow from "/icons/arrow-right.svg";

function Banner({ onClose }) {
  return (
    <div className="w-screen bg-black text-white text-center p-[10px] flex justify-center items-center gap-[16px] max-h-[40px] z-30 relative">
      <span className="font-sans font-semibold text-[18px] leading-[17.63px]">
        🎉 Exclusive Pre-launch price and offers
      </span>
      <div className="flex items-center justify-center gap-[4px] cursor-pointer">
        <span className="font-sans font-semibold text-[18px] leading-[17.63px] hover:underline hover:decoration-white">
          Get it now
        </span>
        <img src={arrow} alt="" />
      </div>
      <button className="absolute right-4 text-white" onClick={onClose}>
        <Xmark className="w-5" />
      </button>
    </div>
  );
}

function Navbar() {
  const [showBanner, setShowBanner] = useState(true); 

  const navLinks = [
    { name: "Home", href: "#Home" },
    { name: "Overview", href: "#Overview" },
    { name: "Pricing", href: "#Pricing" },
    { name: "Master Plan", href: "#MasterPlan" },
    { name: "Location", href: "#Location" },
    { name: "Amenities", href: "#Amenities" },
    { name: "Gallery", href: "#Gallery" },
  ];

  return (
    <div className="font-body fixed w-full z-20 top-0 start-0 bg-PrestigeGrey shadow">
      {showBanner && <Banner onClose={() => setShowBanner(false)} />}
      <div className="max-w-8xl mx-auto px-5 lg:px-0 flex items-center justify-between w-full py-[8px] z-40">
        {/* logo */}
        <a href="/" className="flex items-center px-4 md:p-0 space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-10 md:h-10" alt="Prestige Southern Star" />
        </a>

        {/* navbar elements */}
        <div className="items-center md:flex" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 md:flex-row gap-12 w-full justify-between text-PrestigeDarkGrey">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block border-b md:border-0 hover:border-gray-400 font-bold text-sm uppercase hover:text-PrestigeBrown transition-all duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* call */}
        <div className="hidden lg:flex items-center">
          <a
            href="tel:+919036958110"
            className="flex items-center bg-PrestigeBrown text-white px-4 py-2 rounded-lg shadow-lg hover:bg-opacity-90 transition"
          >
            <Phone className="w-5 h-5 mr-2" /> 9036958110
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
