import React from 'react'
import './CSS/HeroOstaleStranice.css';
const HeroOstaleStranice = ({naslov}) => {
  return (
    <section>
        <div className="hero-ostale-stranice">
            <h1 className='title'>{naslov}</h1>
        </div>

    </section>
  )
}

export default HeroOstaleStranice