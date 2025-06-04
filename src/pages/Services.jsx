import React from 'react'
import HeroOstaleStranice from '../components/HeroOstaleStranice'
import '../components/CSS/Services.css'; // Assuming you have a CSS file for styling the Services page
import ServiceCard from '../components/ServiceCard';
import { Traka } from '../components/Traka'; 
import ZakazivanjeForma from '../components/ZakazivanjeForma';
import FAQ from '../components/FAQ';
import Newsletter from '../components/Newsletter';
 
const Services = () => {

  return (
        <>
        
           <HeroOstaleStranice naslov={"Services"}></HeroOstaleStranice>
            <section className="sekcija-usluge"> 
                <p className="podnaslov">OUR SERVICES</p>
                <h2 className='title'><span>A Wide Range of Services</span> for Your Best Smile  </h2>
                 <div className="cards-container">
                        <ServiceCard
                          icon="/images/tooth.png"
                          image="/images/dentistry.png"
                          title="General Dentistry"
                          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                          onLearnMore={() => alert('General Dentistry details')}
                        />
                        <ServiceCard
                          icon="/images/tooth.png"
                          image="/images/dentistry.png"
                          title="General Dentistry"
                          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                          onLearnMore={() => alert('General Dentistry details')}
                        />
                        <ServiceCard
                          icon="/images/tooth.png"
                          image="/images/dentistry.png"
                          title="General Dentistry"
                          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                          onLearnMore={() => alert('General Dentistry details')}
                        />
                         <ServiceCard
                          icon="/images/tooth.png"
                          image="/images/dentistry.png"
                          title="General Dentistry"
                          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                          onLearnMore={() => alert('General Dentistry details')}
                        />
                        <ServiceCard
                          icon="/images/tooth.png"
                          image="/images/dentistry.png"
                          title="General Dentistry"
                          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                          onLearnMore={() => alert('General Dentistry details')}
                        />
                        <ServiceCard
                          icon="/images/tooth.png"
                          image="/images/dentistry.png"
                          title="General Dentistry"
                          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..."
                          onLearnMore={() => alert('General Dentistry details')}
                        />
                      </div>
            
            
             </section>
            <Traka></Traka>
            <ZakazivanjeForma></ZakazivanjeForma>
            <Traka></Traka>
            <FAQ></FAQ>
            <Newsletter></Newsletter>


        </>
    
  )
}

export default Services