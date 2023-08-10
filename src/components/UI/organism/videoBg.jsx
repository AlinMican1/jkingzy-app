'use client'
import React from 'react'
import './videoBg.css'
import trailer from '../../../assets/trailer2.mp4'

import ContentBox from '../molecule/contentBox'
import YoutubeVids from '../molecule/youtubeVids'
import { useRef , useEffect } from 'react'
import Plx from 'react-plx'

const VideoBg = () => {

  return (
    <div className='video-container'>
              
            <video  src={trailer} autoPlay loop muted type="video/mp4"/>
            
            <div className='video-overlay' />
            
            <Plx
            parallaxData={[{
              start: "self",
              startOffset: 0,
              duration: "80vh",
              easing:"ease-in",
              properties: [
                {
                    startValue:0,
                    endValue:0,
                    unit:"vh",
                    property:"translateY"
                }
              ]
            }
          ]}
            >
            <div className='video-container-fade'></div>
            </Plx>
            <Plx
            parallaxData={[{
              start: 0,
              duration: "100vh",
              easing:"ease-in",
              properties: [
                {
                    startValue:-50,
                    endValue:-90,
                    unit:"vh",
                    property:"translateY"
                }
              ]
            }
          ]}
            >
            <div className='video-title'>
            <h1 className='video-title-text' >KingzAce <br/><p > Aviation </p> </h1>
            
            </div> 
            </Plx>
          
            
            

        {/* <ContentBox /> */}
        
    </div>
  )
}

export default VideoBg