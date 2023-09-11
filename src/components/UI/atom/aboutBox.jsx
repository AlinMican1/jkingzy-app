'use client'
import Image from 'next/image'
import React, { useLayoutEffect , useEffect, useRef } from 'react'
import {motion, Variants} from 'framer-motion'
import './aboutBox.css'
//About
const AboutBox = () => {
    const AnimateText ={
        offscreen: {y:100},
        onscreen:{
            y:0,
            transition: {type:'spring', bounce:0.4,duration:1,}
        }
    }
    useEffect(() => {(
        async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default;
          const locomotiveScroll = new LocomotiveScroll();
        }
        )()
      
      }, []);
  return (
    <div className='about-container'>
        <div className='shaped'></div>
        <motion.div initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={AnimateText} className='about-description-desktop'>
        <h1>Hi <span className='shaped-title'>all,</span></h1>
            <p>
I'm Joshua, the aviation enthusiast whose also known as ThekingzAce. 
I'm a 20 year old student pilot from the UK, who aims to travel around the world and help inspire others in chasing their dreams to 
become a pilot. I've been on social media since 2020, for where I started off my content creating 
career making flight sim tutorials and plane spotting videos.</p>
        </motion.div>
        <div className='about-description-phone'>
            <h1>Hi <span className='shaped-title'>all,</span></h1>
            <p>I'm Joshua, the aviation enthusiast whose also known as ThekingzAce. 
I'm a 20 year old student pilot from the UK, who aims to travel around the world and help inspire others in chasing their dreams to 
become a pilot. I've been on social media since 2020, for where I started off my content creating 
career making flight sim tutorials and plane spotting videos.</p>
        </div>
    </div>
  )
}

export default AboutBox