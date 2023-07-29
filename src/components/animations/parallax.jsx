'use client'
import Image from 'next/image'
import React from 'react'
import './parallax.css'
import background from '../../assets/backgroundclouds.jpg'
import cloudsForeground2 from '../../assets/cloudsForeground2.png'
import planeForeground from '../../assets/planeForeground.png'
import { useEffect, useRef } from 'react'

const Parallax = () => {
    const backgroundRef = useRef(null);
    const planeRef = useRef(null);
    const cloudRef = useRef(null);
    const textRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
          const value = window.scrollY;
    
          if (backgroundRef.current) {
            backgroundRef.current.style.top = value * 0.5 + 'px';
          }
          if (planeRef.current) {
            planeRef.current.style.left = -value * 0.5 + 'px';
          }
          if (cloudRef.current) {
            cloudRef.current.style.top = value * 0.15 + 'px';
          }
          if (textRef.current) {
            textRef.current.style.top = value * 1 + 'px';
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component is unmounted
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  
    return (
    <div className='main-body'>
    <section className='parallax-wrapper'>
        <Image src={background} ref={backgroundRef} id='background' alt='' />
        <Image src={planeForeground} ref={planeRef} id='plane' alt='' />
        <Image src={cloudsForeground2} ref={cloudRef} id='clouds' alt=''/>
        <h2 id='title-parallax' ref={textRef}>Joshua King</h2>
        <div className='parallax-overlay'></div>
        
    </section>
    </div>
  )
}

export default Parallax