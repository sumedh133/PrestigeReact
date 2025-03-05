import herobanner from "../assets/home/HeroBG.webp"; 
import Button from "../components/button/buttonMain"; 
import homeLocation from "../assets/home/location.svg"; 
import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

export const Home = () => {
  const isMobile = useIsMobile();
  
  const containerStyle = {
    backgroundImage: `url(${herobanner})`,
    backgroundSize: "cover",
    backgroundPosition: isMobile ? "30% center" : "15% 25%",
  };

  const overlayStyle = {
    backgroundImage: isMobile
      ? "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7), rgba(0,0,0,0.5) )"
      : "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
    padding: "2rem",
    height: "100%",
  };

  return (
    
    <div
      id="Home"
      className="w-full h-[30rem] min-h-[98vh] sm:min-h-[85vh] mt-14 md:mt-[4.5rem]"
      style={containerStyle}
    >
      <div className="relative flex flex-col justify-center h-[30rem] min-h-[110vh] sm:min-h-[85vh] w-full items-center gap-8">
        <div className="w-full flex items-center" style={overlayStyle}>
          <div className="px-5 lg:px-[7.5rem] md:px-10 flex flex-row justify-center items-center w-full text-white lg:items-start gap-8 pb-[50%] sm:pb-0">
            <div
              className="hidden md:block md:h-60 md:w-1 md:bg-white"
              style={{
                borderTopLeftRadius: "3px",
                borderBottomLeftRadius: "3px",
              }}
            ></div>

            <div className="w-full max-w-10xl flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-9">
              <div className="flex gap-4 flex-col w-full">
                <h1 className="font-subheading text-3xl md:text-6xl font-semibold uppercase">
                  Prestige Southern Star
                </h1>

                <p className="font-body text-white md:text-2xl text-sm font-normal lg:w-4/6 mx-auto lg:mx-0">
                  Redefining Luxury Living with Modern Elegance and Natural
                  Serenity in Bangalore's Prime Location
                </p>
              </div>

              <div className="block sm:hidden">
                <div className="flex gap-2 md:gap-3 rounded-none md:rounded-none items-center text-center md:px-10 px-4">
                  <div className="rounded-full bg-white p-1">
                    <img
                      src={homeLocation} 
                      alt="Location"
                      className="h-3 md:h-6 text-white"
                    />
                  </div>
                  <p className="max-w-96 font-body font-semibold text-left text-white md:text-2xl text-sm">
                    Akshayanagar 
                  </p>
                </div>
              </div>

              <Button
                text="Enquire Now!"
              />
            </div>
          </div>
        </div>

        <div className=" hidden absolute sm:block top-[67%] right-0 md:mt-0 z-10">
          <div className="flex gap-2 md:gap-3 bg-totalgrey rounded-none md:rounded-none items-center text-center md:px-10 md:py-6 px-4 py-4">
            <img
              src={homeLocation} 
              alt="Location"
              className="h-3 md:h-6 text-black"
            />
            <p className="max-w-96 font-body text-left text-black md:text-2xl text-xs font-medium leading-[130%]">
              Akshayanagar 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
