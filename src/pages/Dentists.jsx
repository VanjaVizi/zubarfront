import React from 'react'
import HeroOstaleStranice from '../components/HeroOstaleStranice'
import ZubarSection from '../components/ZubarSection'
import useZubari from '../components/hooks/useZubari';
import { Traka } from '../components/Traka';
import ZakazivanjeForma from '../components/ZakazivanjeForma';
import VideoSnimakStats from '../components/VideoSnimakStats';
import Newsletter from '../components/Newsletter';

const Dentists = () => {
  const zubari = useZubari();
  return (
     <>
          <HeroOstaleStranice naslov={" Dentists"}/> 
          <ZubarSection  zubari={zubari}/>
          <Traka/>
          <ZakazivanjeForma></ZakazivanjeForma>
           <Traka/>
           <VideoSnimakStats videoSrc="videos/videozubarka.mp4" /> 
           <Newsletter></Newsletter>
     
     </>
  )
}

export default Dentists