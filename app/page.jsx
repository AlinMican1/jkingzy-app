'use client'
import VideoBg from '../src/components/UI/organism/videoBg'
import ContentBox from '../src/components/UI/molecule/contentBox'
import '../styles/globals.css'
import YoutubeVids from '../src/components/UI/molecule/youtubeVids'
import Plx from 'react-plx'
import WelcomeBox from '../src/components/UI/molecule/welcomeBox'
import ToggleNavBar from '../src/components/UI/molecule/toggleNavBar'
import { Suspense } from 'react'

export default async function Home() {
  
  return (
    
    <div  className='home-page'  >
      
      
      <div id='video-bg'>
        <VideoBg />
        
        </div>
        
        <div id="welcome-content">
          <WelcomeBox />
        </div>
      
        <div id='recent-videos' >
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
            <div className="text-container">
              <h1 className='recent-videos-title'>Recent Videos</h1>
              <Plx
            parallaxData={[{
              start: "self",
              startOffset: 0,
              duration: "130vh",
              easing:"ease-in",
              properties: [
                {
                    startValue:10,
                    endValue:-5,
                    unit:"vh",
                    property:"translateY"
                }
              ]
            }
          ]}
            >
              <p className='recent-videos-description'>Like and subscribe!</p>
              </Plx>
            </div>
            </Plx>
              <YoutubeVids  />
          
        </div>
      <div id='content-box-place'>
        <ContentBox />
      </div>
     
       
        
    </div>
    
  )
}
