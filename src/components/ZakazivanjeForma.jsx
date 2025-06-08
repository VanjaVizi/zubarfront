import React from 'react';
import '../components/CSS/ZakazivanjeForma.css';

const ZakazivanjeForma = () => {
  
  return (
    <section className="zakazivanje-container">
      <div className="forma-levo">
        <p className="podnaslov">BOOK AN APPOINTMENT</p>
        <h2 className="naslov">
          <span>Effortless Online Booking</span> for Your Dental Visit
        </h2>
        <form className="forma-grid">
          <div className="input-par">
            <label>Your Name *</label>
            <input type="text" placeholder="Ex. John Doe" required />
          </div>
          <div className="input-par">
            <label>Phone Number *</label>
            <input type="tel" placeholder="Enter Phone Number" required />
          </div>
          <div className="input-par">
            <label>Type of Appointment *</label>
            <select required>
              <option value="">Select</option>
              <option value="cleaning">Cleaning</option>
              <option value="checkup">Check-up</option>
              <option value="surgery">Surgery</option>
            </select>
          </div>
          <div className="input-par">
            <label>Preferred Dentist *</label>
            <select required>
              <option>Dr. David Brown</option>
              <option>Dr. Sarah Smith</option>
            </select>
          </div>
          <div className="input-par">
            <label>Preferred Date*</label>
            <input type="date" defaultValue="2024-11-25" required />
          </div>
          <div className="input-par">
            <label>Preferred Time*</label>
            <input type="time" defaultValue="10:00" required />
          </div>
          <div className="input-par textarea">
            <label>Special Requests or Notes *</label>
            <textarea placeholder="Enter here.." required />
          </div>
          <div className="dugme">
            <button type="submit">Book an Appointment</button>
          </div>
        </form>
      </div>
      <div className="informacije-desno">
        <p className="opis-klinike">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </p>

        <div className="radno-vreme">
          <h4 className='naslovBeli'>Clinic Hours</h4>
          <ul>
            <li  className='naslovBeli'><span>Monday to Friday</span><span>09:00 - 22:00</span></li>
            <li  className='naslovBeli'><span>Saturday</span><span>11:00 - 20:00</span></li>
            <li  className='naslovBeli'><span>Sunday</span><span>Closed</span></li>
          </ul>
        </div>

        <div className="hitne-info">
          <p className="prioritet">Your Smile, Our Priority</p>
          <h3>24/7 Emergency</h3>
          <p className="telefon">(000) 000-0000</p>
        </div>
      </div>
    </section>
  );
};

export default ZakazivanjeForma;
