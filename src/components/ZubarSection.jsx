import React from 'react';
import './CSS/ZubarSection.css';
import ZubarCard from './ZubarCard';
 

const zubari = [
  {
    ime: "Dr. Olivia Hayes",
    titula: "Cosmetic Dentist",
    slika: '/images/zubar1.png',
    facebook: "https://facebook.com/oliviahayes",
    pinterest: "https://pinterest.com/oliviahayes",
    instagram: "https://instagram.com/oliviahayes",
    linkedin: "https://linkedin.com/in/oliviahayes",
    tiktok: "https://tiktok.com/@oliviahayes"
  },
  {
    ime: "Dr. Emily Carter",
    titula: "General Dentist",
    slika: '/images/zubar1.png',
    facebook: "https://facebook.com/emilycarter",
    pinterest: "https://pinterest.com/emilycarter",
    instagram: "https://instagram.com/emilycarter",
    linkedin: "https://linkedin.com/in/emilycarter",
    tiktok: "https://tiktok.com/@emilycarter"
  },
  {
    ime: "Dr. James Walker",
    titula: "Orthodontist",
    slika: '/images/zubar1.png',
    facebook: "https://facebook.com/jameswalker",
    pinterest: "https://pinterest.com/jameswalker",
    instagram: "https://instagram.com/jameswalker",
    linkedin: "https://linkedin.com/in/jameswalker",
    tiktok: "https://tiktok.com/@jameswalker"
  }
];

const ZubarSection = () => {
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
