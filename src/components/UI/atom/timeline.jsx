'use client'
import './timeline.css'
import React, {useEffect, useRef, useState} from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'

const Timeline = () => {
    const [scrollY, setScrollY] = useState(0);
    const [planePosition, setPlanePosition] = useState(0);
    const [windowDimension, setWindowDimension] = useState({ winWidth: typeof window !== 'undefined' ? window.innerWidth : 0 });
    const planeRef = useRef(null);

    const detectSize = () =>{
      setWindowDimension ({
        winWidth: window.innerWidth
      })
    }
    useEffect(() => {
      window.addEventListener('resize', detectSize)
      return () => {
        window.removeEventListener('resize',detectSize)
      
      };
    }, [windowDimension]);
   
    
    useEffect(() => {

        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
    
        return () => {
  
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      useEffect(() => {
        // Define a function to calculate the plane's position based on the scrollY value
        const timelineSection = document.querySelector('.timeline-items');
        const height = timelineSection.clientHeight;
        
        const calculatePlanePosition = () => {
            //Adjust plane movement based on size
            if(windowDimension.winWidth < 767){
              const factor = 0.8; // Calculate the factor to map scrollY to 0-100%
              const viewportHeight = window.innerHeight;
              const newPosition = Math.min(Math.max((scrollY - 125) * factor, 0), height); // Map scrollY to 0-100%
              setPlanePosition(newPosition);
            }
            else{
              const factor = 0.7; // Calculate the factor to map scrollY to 0-100%
              const viewportHeight = window.innerHeight;
              const newPosition = Math.min(Math.max((scrollY - 125) * factor, 0), height); // Map scrollY to 0-100%
              setPlanePosition(newPosition);
              
            }
           
       
        
         };
    
        calculatePlanePosition();
      }, [scrollY]);
    
  
    const AnimateBox = {
      offscreen: { y: 200, opacity: 0 },
      onscreen: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 1,
        },
      },
    };
  
    return (
      <section className="timeline-section">
        <div className="timeline-items">
          <div className='timeline-line' ref={planeRef} style={{ height: `${planePosition}px` }}></div>
          <div
            className="timeline-plane"
            ref={planeRef}
            style={{ transform:  `translateY(${planePosition}px) rotate(90deg)`, }}
          >
            ✈
          </div>
		<motion.div  initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={AnimateBox} className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">2020</div>
			<div className="timeline-content">
				<h3>Youtube</h3>
				<p>I started YouTube in 2020 during the Covid 19 pandemic for where I made tutorial videos for people on X-Plane 11. </p>
                <Link className='find-more-link' href="https://www.youtube.com/@TheKingzAce"> Find out more </Link> 
			</div>
		</motion.div>
		<motion.div initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={AnimateBox} className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">2021</div>
			<div className="timeline-content">
				<h3>Flight attendant </h3>
				<p>I completed my mechanical engineering college course and begun my Private Pilot Licence training. But to gather information about becoming a pilot I applied for the role of a flight attendant with Ryanair. 
           </p>
			</div>
		</motion.div>
		<motion.div initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={AnimateBox} className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">2022</div>
			<div className="timeline-content">
				<h3>TikTok</h3>
				<p>I launched a TikTok page and people loved what I made gaining 100k followers within 5 
          months on the new social media platform and became recognized by major airline companies such as EastJet, Swiss and Lufthansa. </p>
          <Link className='find-more-link' href="https://www.tiktok.com/@thekingzace"> Find out more </Link>
      </div>
		</motion.div>
		<motion.div initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={AnimateBox} className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">2023</div>
			<div className="timeline-content">
				<h3>Fiverr</h3>
				<p> I launched a small business on fiverr to help those who look for cinematic but cannot make them maybe due to pc limitations. In addition, 
          I would like to help the official launch of my friends Unique clothing brand called icarus_clo. </p>
          <Link className='find-more-link' href="https://www.fiverr.com/thekingzace"> More about my Fiverr </Link> <br/>
          <Link className='find-more-link' href="https://www.instagram.com/icarus_clo/"> More about Icarus </Link>
			</div>
		</motion.div>
		
	</div>
</section>
  )
}

export default Timeline