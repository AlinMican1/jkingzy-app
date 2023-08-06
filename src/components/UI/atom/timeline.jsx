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
        const calculatePlanePosition = () => {
            //Adjust plane movement based on size
          if(windowDimension.winWidth > 1142){
            const factor = 0.7; // Calculate the factor to map scrollY to 0-100%
            const newPosition = Math.min(Math.max((scrollY - 125) * factor, 0), 1100); // Map scrollY to 0-100%
            setPlanePosition(newPosition);
            
          }
          else if(windowDimension.winWidth >= 949 && windowDimension.winWidth < 1143){
            const factor = 0.7; // Calculate the factor to map scrollY to 0-100%
            const newPosition = Math.min(Math.max((scrollY - 125) * factor, 0), 1125); // Map scrollY to 0-100%
            setPlanePosition(newPosition);
            
            
          }
          else if(windowDimension.winWidth > 890 && windowDimension.winWidth < 949){
            const factor = 0.7; // Calculate the factor to map scrollY to 0-100%
            const newPosition = Math.min(Math.max((scrollY - 125) * factor, 0), 1200); // Map scrollY to 0-100%
            setPlanePosition(newPosition);
            
          }
          else if(windowDimension.winWidth > 795 && windowDimension.winWidth <= 890){
            const factor = 0.7; // Calculate the factor to map scrollY to 0-100%
            const newPosition = Math.min(Math.max((scrollY - 125) * factor, 0), 1205); // Map scrollY to 0-100%
            setPlanePosition(newPosition);
            
          }
          else if(windowDimension.winWidth > 767 && windowDimension.winWidth <= 795){
            const factor = 0.7; // Calculate the factor to map scrollY to 0-100%
            const newPosition = Math.min(Math.max((scrollY - 125) * factor, 0), 1230); // Map scrollY to 0-100%
            setPlanePosition(newPosition);
            
          }
          else if(windowDimension.winWidth > 500 && windowDimension.winWidth <= 649){
            const factor = 0.7; // Calculate the factor to map scrollY to 0-100%
            const newPosition = Math.min(Math.max((scrollY - 125) * factor, 0), 1120); // Map scrollY to 0-100%
            setPlanePosition(newPosition);
            
          }
          else if(windowDimension.winWidth > 472 && windowDimension.winWidth <= 500){
            const factor = 0.7; // Calculate the factor to map scrollY to 0-100%
            const newPosition = Math.min(Math.max((scrollY - 125) * factor, 0), 1200); // Map scrollY to 0-100%
            setPlanePosition(newPosition);
           
          }
          else if(windowDimension.winWidth > 400 && windowDimension.winWidth <= 472){
            const factor = 0.7; // Calculate the factor to map scrollY to 0-100%
            const newPosition = Math.min(Math.max((scrollY - 125) * factor, 0), 1205); // Map scrollY to 0-100%
            setPlanePosition(newPosition);
            
          }
          else if(windowDimension.winWidth > 390 && windowDimension.winWidth <= 400){
            const factor = 0.7; // Calculate the factor to map scrollY to 0-100%
            const newPosition = Math.min(Math.max((scrollY - 125) * factor, 0), 1310); // Map scrollY to 0-100%
            setPlanePosition(newPosition);
            
          }
          else if(windowDimension.winWidth > 375 && windowDimension.winWidth <= 390){
            const factor = 0.7; // Calculate the factor to map scrollY to 0-100%
            const newPosition = Math.min(Math.max((scrollY - 125) * factor, 0), 1320); // Map scrollY to 0-100%
            setPlanePosition(newPosition);
            
          }
          else if(windowDimension.winWidth > 0 && windowDimension.winWidth <= 375){
            const factor = 0.7; // Calculate the factor to map scrollY to 0-100%
            const newPosition = Math.min(Math.max((scrollY - 125) * factor, 0), 1300); // Map scrollY to 0-100%
            setPlanePosition(newPosition);
            
          }
          
          else{
            const factor = 0.7; // Calculate the factor to map scrollY to 0-100%
            const newPosition = Math.min(Math.max((scrollY - 125) * factor, 0), 1050); // Map scrollY to 0-100%
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