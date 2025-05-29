 
import React from 'react';
import ServiceCard from './ServiceCard';
import './CSS/OurServices.css';

export default function OurServices() {
  return (
    <section className="services-section">
       <p className="podnaslov">OUR SERVICES</p>
      <h2 className="title">
        A Wide Range of Services <br /> <span>for Your Best Smile</span>
      </h2>
      <button className="explore-btn">Explore All Services</button>

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
      </div>
    </section>
  );
}
