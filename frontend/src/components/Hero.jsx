import React from 'react';
import { BiSearch } from 'react-icons/bi'; // React icon for the search icon
import { AnimatedTooltip } from '../components/ui/Animated-tooltip'; // Import the AnimatedTooltip component
import { People } from './ui/acertinity'; // Import the People data

const Hero = () => {
  return (
    <div id='hero' className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile view */}
        <img
          src="/mobilehero.svg" 
          alt="Mobile Hero"
          className="w-full object-fill lg:hidden"
        />
        {/* Desktop view */}
        <img
          src="/Group 15.svg" 
          alt="Desktop Hero"
          className="h-auto  w-full h-full hidden sm:block"
           style={{
            objectFit: 'contain',
           objectPosition: 'right',
          }}
        />
      </div>

      {/* Hero Content */}
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center text-white w-full px-4"> */}
        {/* Search Box for Mobile */}
       
       
        {/* <div className="flex flex-row justify-start items-center mt-4">
          <AnimatedTooltip items={People} />
        </div> */}

        
      
      {/* </div> */}
    </div>
  );
};

export default Hero;
