
import React from 'react'
import Parallax from '../../src/components/animations/parallax'
import '../../styles/globals.css'
import Quotes from '../../src/components/UI/atom/quotes'
import AboutBox from '../../src/components/UI/atom/aboutBox'
import background from '../../src/assets/backgroundclouds.jpg'
import cloudsForeground2 from '../../src/assets/cloudsForeground2.png'
import planeForeground from '../../src/assets/planeForeground.png'

export default async function About() {
  return (
    <div className='about-page'>
      <div id='parallax-effect-container'>
        <Parallax backgroundSrc={background} foreground2Src={cloudsForeground2} foreground1Src={planeForeground} titleTxt={'Joshua King'}/>
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

