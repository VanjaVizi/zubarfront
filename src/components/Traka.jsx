
import React from 'react';
import './CSS/Traka.css';
import { FaTooth } from 'react-icons/fa';

export const Traka = () => {
  const services = [
    'General Dentistry',
    'Teeth Whitening',
    'Dental Implant',
    'Dental Sealant',
    'Orthodontics',
    'Tooth Extraction', 
    
    
  ];

  return (
    <div className="scrolling-bar">
      <div className="scrolling-track">
        {[...services, ...services].map((service, index) => (
          <div className="scrolling-item" key={index}>
            <FaTooth className="tooth-icon" />
            <span>{service}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
