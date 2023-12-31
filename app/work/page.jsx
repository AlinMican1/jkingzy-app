'use client'
import React from 'react'
import Parallax from '../../src/components/animations/parallax'
import background from '../../src/assets/work_background.jpg'
import transparent from '../../src/assets/transparent.png'
import Timeline from '../../src/components/UI/atom/timeline'
import Plx from 'react-plx'
import '../../styles/globals.css'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Work = () => {
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
    
    <div className='work-page'>
        <Parallax backgroundSrc={background} foreground1Src={transparent} foreground2Src={transparent} titleTxt={"Work"} />
        <div id='timeline-section'>
          <Timeline/>
        </div>
        <Plx
            parallaxData={[{
              start: "self",
              startOffset: 0,
              duration: "80vh",
              easing:"ease-in",
              properties: [
                {
                    startValue:10,
                    endValue:0,
                    unit:"vh",
                    property:"translateY"
                }
              ]
            }
          ]}
            >
        <h1 className='fiverr-title'>Fiverr
        <Plx
            parallaxData={[{
              start: "self",
              startOffset: 0,
              duration: "80vh",
              easing:"ease-in",
              properties: [
                {
                    startValue:12,
                    endValue:0,
                    unit:"vh",
                    property:"translateY"
                }
              ]
            }
          ]}
            > <span className='span-fiverr-title'> Edits.</span> </Plx></h1>
        </Plx>
        <motion.div initial={"offscreen"} whileInView={'onscreen'} viewport={{once:true}} variants={VideoAnimation} id='fiverr-videos'>
        <div>
        <iframe src={'https://www.youtube.com/embed/b99LmwfjdhY?si=UTM69Yo0o7LyvCNV'} className='fiverr-video-player'  style={{ border: '2px solid #00A8D0' }} controls>
         
        </iframe>
        </div>
        <div>
        <iframe src={'https://www.youtube.com/embed/mp1JVuqgRbM?si=xURW0854RDth-eoX'} className='fiverr-video-player'  style={{ border: '2px solid #00A8D0' }} controls>
         
        </iframe>
        </div>
        </motion.div>
        <div className='video-footer'>
          <h1>Do you want your own edit?</h1>
          <p>Get in contact <Link className='custom-fiverr-link' href={"https://www.fiverr.com/thekingzace"}> Fiverr</Link></p>
          <p className='custom-p'>Or</p>
          <p>Free Cinematic <Link className='custom-fiverr-link' href={"https://drive.google.com/drive/folders/1NqlmGmS_eFbOyi8VXlb0JomiPaWeXaLg?usp=sharing"}> Clips</Link></p>
        </div>
    </div>
    
  )
}

export default Work