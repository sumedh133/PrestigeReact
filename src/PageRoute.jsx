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
import SiteVisitForm from './components/contact/SiteVisitForm';
import ContactForm from './components/contact/ContactForm';

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
  const [sitevisitmodal, setSiteVisitModal] = useState(false);
  const [contactmodal, setContactModal] = useState(false);

  return (
    <div>
      {sitevisitmodal && (
        <SiteVisitForm
        sitevisitmodal={sitevisitmodal}
        setSiteVisitModal={setSiteVisitModal}
        />
      )}
      {contactmodal && (
        <ContactForm
          contactmodal={contactmodal}
          setContactModal={setContactModal}
          setSiteVisitModal={setSiteVisitModal}
        />
      )} 
      <Navbar 
        contactmodal={contactmodal}
        setContactModal={setContactModal}
       /> 
      <WhatsApp />
      <RevealOnScroll>
        <Home 
        contactmodal={contactmodal}
        setContactModal={setContactModal}
        />
      </RevealOnScroll>
      <RevealOnScroll><Features /></RevealOnScroll>
      <RevealOnScroll>
        <Overview 
          contactmodal={contactmodal}
          setContactModal={setContactModal}
        />
      </RevealOnScroll>
      <RevealOnScroll>
        <Pricing 
          contactmodal={contactmodal}
          setContactModal={setContactModal}
        />
      </RevealOnScroll>
      <RevealOnScroll>
        <MasterPlan 
          contactmodal={contactmodal}
          setContactModal={setContactModal}
        />  
      </RevealOnScroll>{/*  */}
      <RevealOnScroll><Location /></RevealOnScroll>
      <RevealOnScroll><Amenities /></RevealOnScroll>
      <RevealOnScroll><Gallery /></RevealOnScroll>

      <Footer 
        contactmodal={contactmodal}
        setContactModal={setContactModal}
      />
    </div>
  )
}

export default PageRoute;
