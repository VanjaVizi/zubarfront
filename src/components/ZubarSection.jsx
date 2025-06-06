import React from 'react';
import './CSS/ZubarSection.css';
import ZubarCard from './ZubarCard';
 


const ZubarSection = ({zubari}) => {
  return (
    <section className="zubar-sekcija">
      <p className="podnaslov">OUR TEAM</p>
      <h2 className="title">
        Meet Our <span>Expert</span> Dental Specialists
      </h2>

      <div className="zubar-grid">
        {zubari.map((zubar, index) => (
          <ZubarCard
            key={index}
            ime={zubar.ime}
            titula={zubar.titula}
            slika={zubar.slika}
            facebook={zubar.facebook}
            pinterest={zubar.pinterest}
            instagram={zubar.instagram}
            linkedin={zubar.linkedin}
            tiktok={zubar.tiktok}
          />
        ))}
      </div>
    </section>
  );
};

export default ZubarSection;
