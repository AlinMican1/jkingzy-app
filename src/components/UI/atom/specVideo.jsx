'use client'
import React from 'react'
import './specVideo.css'
import {motion, Variants} from 'framer-motion'
import { Container } from 'react-bootstrap';
const SpecVideo = () => {
    const VideoAnimation ={
        offscreen:{ opacity: 0, scale: 0.5 },
        onscreen:{
            opacity: 1, scale: 1,
            transition: { duration: 0.8,
                delay: 0.1,
                ease: [0, 0.71, 0.2, 1.01]}
        }
    }
  return (
    
   <Container>
    
    <motion.div initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={VideoAnimation} className='spec-video-container'>
        <iframe src="https://www.youtube.com/embed/hiy8iBaOTUU?si=QspMWNP0f72DwmmH" title='Youtube video' allowFullScreen /> 
    </motion.div>
    
    </Container>
  
  )
}

export default SpecVideo
