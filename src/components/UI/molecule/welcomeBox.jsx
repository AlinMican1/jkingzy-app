'use client'
import React from 'react'
import './welcomeBox.css'
import { motion } from 'framer-motion'
import '../../../../styles/globals.css'

const WelcomeBox = () => {

  const AnimateText ={
    offscreen:{ opacity: 0, scale: 0.5 },
    onscreen:{
        opacity: 1, scale: 1,
        transition: { duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01]}
    }
  }
  
  return (
    <motion.div initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={AnimateText} className='content-paragraph'>
        <h1>Welcome to my <span className='span-fiverr-title'>hub!</span></h1> 
        <p>My name is Joshua and i am a flight Sim streamer and aviation enthusiast. 
            A platform where I record my captivating aviation journey and share enriching life experiences from the skies.  </p>
          
      </motion.div>
  )
}

export default WelcomeBox