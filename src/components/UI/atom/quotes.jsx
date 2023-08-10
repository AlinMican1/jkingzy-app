'use client'
import React from 'react'
import './quotes.css'
import Plx from 'react-plx'
import Image from 'next/image'
import test from '../../../../styles/niceBg.jpg'

import { useEffect } from 'react'

const Quotes = () => {
  useEffect(() => {(
    async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    }
    )()
  
  }, []);
  return (
    <div className='quotes-wrapper'>
    
        {/* <Image src={test} alt=''/>   */}
        <div data-scroll data-scroll-speed ='-0.08' id='box-one'>
            <p>“A 'good' landing is one from which you can walk away. A 'great' landing is one after which they can use the plane again.” - Gerald R. Massie</p>
        </div>
       
       
        <div data-scroll data-scroll-speed ='-0.06' id='box-two'>
        <p>Always remember to use RIGHT RUDDER!!!</p>
        </div>
      
        <div data-scroll data-scroll-speed ='-0.08' id='box-three'>
        <p>“Man must rise above the Earth—to the top of the atmosphere and beyond—for only thus will he fully understand the world in which he lives.” - Socrates</p>
        </div>
     
        </div>
   
  )
}

export default Quotes