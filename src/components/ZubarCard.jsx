import React from 'react'; 
import { FaFacebookF, FaPinterestP, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

const ZubarCard = ({ ime, titula, slika, facebook, pinterest, instagram, linkedin, tiktok }) => {
  return (
    <div className="zubar-card">
      <div className="zubar-slika">
        <img src={slika} alt={ime} />
        <div className="social-icons">
          {facebook && (
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          )}
          {pinterest && (
            <a href={pinterest} target="_blank" rel="noopener noreferrer">
              <FaPinterestP />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          )}
          {tiktok && (
            <a href={tiktok} target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          )}
        </div>
      </div>
      <div className="zubar-info">
        <h3>{ime}</h3>
        <p>{titula}</p>
      </div>
    </div>
  );
};

export default ZubarCard;
