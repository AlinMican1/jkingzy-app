'use client'

import React from 'react'
import Parallax from '@/components/animations/parallax'
import '../../styles/globals.css'
import Quotes from '@/components/UI/atom/quotes'
import AboutBox from '@/components/UI/atom/aboutBox'
const About = () => {
  return (
    <div className='about-page'>
      <div id='parallax-effect-container'>
        <Parallax />
      </div>
      <div id="quotes-parallax-effect">
        <Quotes/>
      </div>
      <div id='about-section'>
        <AboutBox />
      </div>
      
    </div>
  )
}

export default About