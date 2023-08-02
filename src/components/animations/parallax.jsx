'use client'
import Image from 'next/image'
import React from 'react'
import './parallax.css'
import { useEffect, useRef } from 'react'

const Parallax = ({backgroundSrc, foreground1Src, foreground2Src, titleTxt}) => {
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
        <Image src={backgroundSrc} ref={backgroundRef} id='background' alt='' />
        <Image src={foreground1Src} ref={planeRef} id='plane' alt='' />
        <Image src={foreground2Src} ref={cloudRef} id='clouds' alt='' />
        <h2 id='title-parallax' ref={textRef}>{titleTxt}</h2>
        <div className='parallax-overlay'></div>
        
    </section>
    </div>
  )
}

export default Parallax