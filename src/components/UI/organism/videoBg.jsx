import React from 'react'
import './videoBg.css'
import trailer from '../../../assets/trailer.mp4'
import Button from '../atom/button'
import Reveal from '@/components/animations/reveal'
import ContentBox from '../molecule/contentBox'
const VideoBg = () => {
  return (
    <div className='video-container'>
            <video src={trailer} autoPlay loop muted type="video/mp4"/>
            <div className='video-overlay' />
            <div className='video-title'>
              <Button btnTexth1={"Welcome to"} btnTextp={"Jkingzy's hub."} btnVariant={'welcome-button'} />
            </div> 

           
        <ContentBox />
    
    </div>
  )
}

export default VideoBg