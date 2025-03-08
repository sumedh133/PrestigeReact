import React, { useState, useEffect } from "react";
import { Phone, Xmark, MenuScale } from "iconoir-react";
import logo from "../../assets/navbar/prestige-group-logo.svg";
import arrow from "/icons/arrow-right.svg";

function Banner({ setContactModal, contactmodal, onClose }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div className="w-screen bg-black text-white text-center p-[10px] flex justify-center items-center gap-[16px] max-h-[40px] z-30 relative">
      <span className={`font-sans font-semibold ${isMobile ? "text-[14px] leading-[14px]" : "text-[18px] leading-[17.63px]"}`}>
        🎉 Exclusive Pre-launch price and offers
      </span>
      <div className="flex items-center justify-center gap-[4px] cursor-pointer">
        <span className={`font-sans font-semibold ${isMobile ? "text-[14px] leading-[14px]" : "text-[18px] leading-[17.63px]"} hover:underline hover:decoration-white`} onClick={() => setContactModal(!contactmodal)}>
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

function Navbar({ setContactModal, contactmodal }) {
  const [showBanner, setShowBanner] = useState(true);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

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
      {showBanner && (
        <Banner
          onClose={() => setShowBanner(false)}
          contactmodal={contactmodal}
          setContactModal={setContactModal}
        />
      )}
      <div className="max-w-8xl mx-auto px-5 lg:px-0 flex flex-wrap items-center justify-between py-[8px] z-40 ">

        <a href="/" className="flex items-center px-4 md:p-0 space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-10 md:h-10" alt="Prestige Southern Star" />
        </a>


        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={toggleMobileNav}
            className="inline-flex items-center w-10 h-10 justify-center text-black hover:bg-skyblue2Color focus:outline-none"
            aria-expanded={isMobileNavOpen ? "true" : "false"}
          >
            <span className="sr-only">
              {isMobileNavOpen ? "Close main menu" : "Open main menu"}
            </span>
            {isMobileNavOpen ? <Xmark className="w-8 h-8" /> : <MenuScale className="w-8 h-8" />}
          </button>
        </div>


        <div
          className={`items-center md:flex ${isMobileNavOpen ? "min-h-screen backdrop-blur-md w-full mt-8" : "hidden md:flex"}`}
          onClick={() => setIsMobileNavOpen(false)}
        >
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
