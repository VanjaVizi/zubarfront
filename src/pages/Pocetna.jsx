import React from 'react'
import { HeroSekcija } from '../components/HeroSekcija' 
import { AboutUsSection } from '../components/AboutUsSection'
import { Traka } from '../components/Traka'
import OurServices from '../components/OurServices'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import CaseStoriesSection from '../components/CaseStoriesSection'
import HowItWorksSection from '../components/HowItWorksSection'
import ZakazivanjeForma from '../components/ZakazivanjeForma'
import FAQ from '../components/FAQ'
import Newsletter from '../components/Newsletter'
 
 

export const Pocetna = () => {
  return (

        <>
            <HeroSekcija
              naslov={"Your <span>Best Dental Experience</span> Awaits"}
              opis={"We are committed to providing you with the best dental care possible. Our team of experienced professionals is here to help you achieve a healthy and beautiful smile."}
              dugme1={"Explore Our Services"}
              dugme2={"Watch Video"}
              slika={'../../images/hero-doktorka.png'}
            ></HeroSekcija>
         
        
           <AboutUsSection></AboutUsSection>
            <Traka></Traka>

          <OurServices></OurServices>
           <Traka></Traka>
         <WhyChooseUsSection></WhyChooseUsSection>
          <CaseStoriesSection></CaseStoriesSection>
          <HowItWorksSection></HowItWorksSection>

          <Traka></Traka>



          <ZakazivanjeForma></ZakazivanjeForma>
          <FAQ></FAQ>
      
          <Newsletter></Newsletter>
         
        </>

  
  )
}
