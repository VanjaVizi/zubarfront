import React from 'react'
import { HeroSekcija } from '../components/HeroSekcija' 
import { AboutUsSection } from '../components/AboutUsSection'
import { Traka } from '../components/Traka'

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
         
 
        </>

  
  )
}
