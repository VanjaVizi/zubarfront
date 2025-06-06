import React from 'react'
import { AboutUsSection } from '../components/AboutUsSection'
import HeroOstaleStranice from '../components/HeroOstaleStranice'
import { Traka } from '../components/Traka'
import '../components/CSS/AboutUs.css';
import { FaEye, FaRocket } from 'react-icons/fa';
import VideoSnimakStats from '../components/VideoSnimakStats'; 
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ZubarSection from '../components/ZubarSection';
const AboutUs = () => {
  return (
    <>
          <HeroOstaleStranice naslov={"About Us"}/> 
          <AboutUsSection/> 
          <Traka/> 
         <section className="vision-mission-section">
            <div className="vision-mission-card">
                <div className="vision-mission-icon-container">
                <FaRocket className="vision-mission-icon" />
                </div>
                <div>
                <h3>Our Vision</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                </div>
            </div>

            <div className="vision-mission-card">
                <div className="vision-mission-icon-container">
                <FaEye className="vision-mission-icon" />
                </div>
                <div>
                <h3>Our Mission</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                </div>
            </div>
            </section>
         <VideoSnimakStats videoSrc="videos/videozubarka.mp4" />

           <Traka/> 
          <HowItWorksSection/>
        <TestimonialsSection/>

         <WhyChooseUsSection/>

         <ZubarSection></ZubarSection>


    
    </>
  )
}

export default AboutUs