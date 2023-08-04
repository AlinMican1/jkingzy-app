'use client'
import './timeline.css'
import React, {useEffect, useRef, useState} from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'

const Timeline = () => {
    const [scrollY, setScrollY] = useState(0);
    const [planePosition, setPlanePosition] = useState(0);
    const [planeInView, setPlaneInView] = useState(false);
    const planeRef = useRef(null);
  
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
        const calculatePlanePosition = () => {
          // Adjust the factor to control the speed of the plane's movement
          const factor = 0.85;
          const newPosition = scrollY >= 100 ? (scrollY - 100) * factor : 0;
          console.log(scrollY)
          setPlanePosition(newPosition);
        };
    
        calculatePlanePosition();
      }, [scrollY]);
    
      useEffect(() => {
        // Initialize the Intersection Observer
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              // If the plane is in view, set planeInView to true
              setPlaneInView(true);
            } else {
              // If the plane is out of view, set planeInView to false
              setPlaneInView(false);
            }
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0.6,
          }
        );
    
        if (planeRef.current) {
          observer.observe(planeRef.current);
        }
    
        return () => {
          if (planeRef.current) {
            observer.unobserve(planeRef.current);
          }
        };
      }, [planeRef]);
  
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
          <div
            className="timeline-plane"
            ref={planeRef}
            style={{ transform:  `translateY(${planeInView ? planePosition : 0}px) rotate(90deg)`, }}
          >
            ✈
          </div>
		<motion.div  initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={AnimateBox} className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">Fiverr</div>
			<div className="timeline-content">
				<h3>My Fiverr Account</h3>
				<p>I create small edits based on pricing bla bla bla bla asdasdgsa gasdg aga sgdas gasgd asg asgas gdasdg asg asdg asg asg sagd aas as gag gsaga gsdg asg . </p>
                <Link className='find-more-link' href="https://www.youtube.com/watch?v=L9W33EuGjoY&t=114s"> Find out more </Link> 
			</div>
		</motion.div>
		<motion.div initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={AnimateBox} className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">Youtube</div>
			<div className="timeline-content">
				<h3>timeline item title</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</div>
		</motion.div>
		<motion.div initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={AnimateBox} className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">Flight-attendant</div>
			<div className="timeline-content">
				<h3>timeline item title</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</div>
		</motion.div>
		<motion.div initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={AnimateBox} className="timeline-item">
			<div className="timeline-dot"></div>
			<div className="timeline-date">2018</div>
			<div className="timeline-content">
				<h3>timeline item title</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			</div>
		</motion.div>
		
	</div>
</section>
  )
}

export default Timeline