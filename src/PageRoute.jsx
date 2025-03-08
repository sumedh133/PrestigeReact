import React from 'react'
import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

import Navbar from './components/navbar/Navbar'
import Amenities from './sections/amenities'
import { Features } from './sections/Features'
import { Home } from './sections/Home'
import { Overview } from './sections/overview'
import Pricing from './sections/pricing'
import { MasterPlan } from './sections/Masterplan'
import { Location } from './sections/Location'
import { Gallery } from './sections/Gallery'
import Footer from './components/footer/Footer'
import { WhatsApp } from './components/contact/WhatsApp';

const RevealOnScroll = ({ children }) => {
    const ref = useRef(null);
    const [isIntersecting, setIntersecting] = useState(false);
  
    const props = useSpring({
      opacity: isIntersecting ? 1 : 0,
      transform: isIntersecting ? "translateY(0)" : "translateY(20px)",
      config: { mass: 1, tension: 210, friction: 20 }
    });
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        { threshold: 0.1 } // Trigger when 10% of the section is visible
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
  
    return (
      <animated.div ref={ref} style={props}>
        {children}
      </animated.div>
    );
};
  

function PageRoute() {
  return (
    <div>
      <Navbar />
      <WhatsApp />
      <RevealOnScroll><Home /></RevealOnScroll>{/*  */}
      <RevealOnScroll><Features /></RevealOnScroll>
      <RevealOnScroll><Overview /></RevealOnScroll>{/*  */}
      <RevealOnScroll><Pricing /></RevealOnScroll>{/*  */}
      <RevealOnScroll><MasterPlan /></RevealOnScroll>{/*  */}
      <RevealOnScroll><Location /></RevealOnScroll>
      <RevealOnScroll><Amenities /></RevealOnScroll>
      <RevealOnScroll><Gallery /></RevealOnScroll>

      <Footer />{/*  */}
    </div>
  )
}

export default PageRoute;
