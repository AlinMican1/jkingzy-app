import Image from 'next/image'
import React, { useLayoutEffect , useEffect, useRef } from 'react'
import {motion, Variants} from 'framer-motion'
import './aboutBox.css'

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
        <h1>Welcome bb</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ipsam dicta deleniti, 
                veniam aliquam quia, vero facilis quo, incidunt laboriosam accusamus? Alias, non? Impedit maxime at accusamus ipsam, 
                numquam neque.</p>
        </motion.div>
        <div className='about-description-phone'>
            <h1>Welcome bb</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ipsam dicta deleniti, 
                veniam aliquam quia, vero facilis quo, incidunt laboriosam accusamus? Alias, non? Impedit maxime at accusamus ipsam, 
                numquam neque.</p>
        </div>
    </div>
  )
}

export default AboutBox