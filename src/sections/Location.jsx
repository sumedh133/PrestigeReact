import React from 'react';
import mapPointer from '../assets/location/markerGodrejGreen.png'; 
import Button from '../components/button/buttonMain'; 

export const Location = () => {
  return (
    <section id="Location" className="max-w-full flex flex-col items-center bg-white">
      <div className="w-full flex flex-col md:flex-row items-center py-7 md:py-14 gap-6 md:gap-14">
        
        <div className="flex flex-col items-center md:items-start w-full px-6 md:pl-[7.5rem] md:justify-between gap-6 text-center md:text-left lg:max-w-lg"> 
          
          <div className="flex md:flex-col items-center md:items-start w-full  md:px-2 gap-2 md:gap-6 ">
            
            <div className='flex flex-col items-center md:items-start w-full lg:px-2 gap-3 md:gap-6 '>
              <h1 className="text-3xl md:text-5xl font-subheading font-normal text-black uppercase">Location</h1> 
              <div className="flex items-center justify-center md:justify-start">
                <img src={mapPointer} alt="Map Pointer" className="w-3 h-3 md:w-5 md:h-5 mr-2" />
                <p className="text-xs md:text-xl font-body font-medium">
                  Begur Road, Bangalore
                </p>
              </div>
            </div>

            <ol className='text-left font-body text-xs md:text-base list-disc font-medium pl-1 md:pl-5 hidden sm:block'>
                <li className=''>Mixed Township</li>
                <li className=''>10 Mins from Metro Stations</li>
                <li className=''>10 mins from Gopalan Mall</li>
            </ol>
          </div>

          <div className="text-center md:text-left w-fit">
            <Button 
              text="Open in Google Maps" 
              className="whitespace-nowrap"  
              onClick={() => window.open("https://maps.app.goo.gl/8SE8zTjAJ2jbWDMT7", "_blank")} 
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-4xl aspect-w-16 aspect-h-9 min-h-[60vh]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.5294118872903!2d77.62024281097742!3d12.873642766965261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6bb9e3ed4057%3A0xde697386b3b53b01!2sPrestige%20Southern%20Star!5e0!3m2!1sen!2sin!4v1733125206822!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};
