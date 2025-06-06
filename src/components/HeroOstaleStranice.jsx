import React from 'react'
import './CSS/HeroOstaleStranice.css';
import Breadcrumbs from './navigacija/Breadcrumbs';
const HeroOstaleStranice = ({naslov}) => {
  return (
    <section>
        <div className="hero-ostale-stranice">
            <h1 className='title'>{naslov}</h1>
            <br />
            <Breadcrumbs/>
        </div>

    </section>
  )
}

export default HeroOstaleStranice