
// import arrow from '../../assets/home/arrow.svg'; 

const Button = ({ text, onClick, className}) => {
  return (
    
    <div
      className={`flex items-center px-10 py-4 w-fit bg-PrestigeBrown text-white cursor-pointer 
                  font-semibold text-xs md:text-sm uppercase whitespace-nowrap gap-10
                  transition-all duration-300 ease-in-out 
                  hover:bg-black hover:text-white ${className} font-body`} 
      onClick={onClick} 
    >
      <div>
        {text} {/* Displaying button text */}
      </div>
      {/* Conditionally render the arrow icon based on the showArrow prop */}
      {/* {showArrow && <img src={arrow} alt="arrow" className="ml-2 hidden md:block" />} Arrow icon */}
    </div>
  );
};

export default Button;
