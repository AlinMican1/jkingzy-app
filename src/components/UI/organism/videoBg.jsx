import React from 'react'
import './videoBg.css'
import trailer from '../../../assets/trailer.mp4'
import Button from '../atom/button'
import Reveal from '@/components/animations/reveal'
import ContentBox from '../molecule/contentBox'
import YoutubeVids from '../molecule/youtubeVids'

const VideoBg = () => {
  return (
    <div className='video-container'>
      
            <video src={trailer} autoPlay loop muted type="video/mp4"/>
            <div className='video-overlay' />
            
            <div className='video-title'>
            <h1>Welcome to <br/> KingzAce's hub </h1>
            
            
             
            </div> 
            
            

        {/* <ContentBox /> */}
        
    </div>
  )
}

export default VideoBg