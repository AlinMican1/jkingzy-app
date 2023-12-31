'use client'
import React from 'react'
import './videoBg.css'


import Plx from 'react-plx'

const VideoBg = () => {

  return (
    <div className='video-container'>
           <div className="youtube-container">
        <iframe width="560" height="315" 
        src="https://www.youtube.com/embed/AAKAGDSEY9E?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=AAKAGDSEY9E" 
        title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
            {/* <video src="https://drive.google.com/drive/folders/1x8OJHY45z6Iv2Z1jOtY8b0RdtpA2Db8V" autoPlay loop muted type="video/mp4" /> */}
            <div className='video-overlay' />
            {/* <Plx
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
            >  */}
            {/* <div className='video-container-fade'></div> */}
            {/* </Plx>  */}
            {/* <Plx
            parallaxData={[{
              start: 0,
              duration: "100vh",
              easing:"ease-in",
              properties: [
                {
                    startValue:-10,
                    endValue:-90,
                    unit:"vh",
                    property:"translateY"
                }
              ]
            }
          ]}
            >  */}
            <div className='video-title'>
            <h1 className='video-title-text' >KingzAce <br/><p > Aviation </p> </h1>
            
            </div> 
            {/* </Plx>  */}
        
    </div>
  )
}

export default VideoBg