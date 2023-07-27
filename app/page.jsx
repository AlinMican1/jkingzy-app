'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/UI/atom/button'
import VideoBg from '@/components/UI/organism/videoBg'
import NavBar from '@/components/UI/molecule/navBar'
import ContentBox from '@/components/UI/molecule/contentBox'
import '../styles/globals.css'
import YoutubeVids from '@/components/UI/molecule/youtubeVids'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Plx from 'react-plx'

export default function Home() {
  
  

  
  return (
    
    <div  className='home-page'  >
     
      <div    id='video-bg'>
        
        <VideoBg />
        
        </div>
        <Plx
            parallaxData={[{
              start: "self",
              startOffset: 0,
              duration: "80vh",
              easing:"ease-in",
              properties: [
                {
                    startValue:0,
                    endValue:-10,
                    unit:"vh",
                    property:"translateY"
                }
              ]
            }
          ]}
            >
      <div    id='background-recent-videos'>
        <div    id='recent-videos' >
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
          <h1 className='recent-videos-title'>Recent Videos</h1>
          <Plx
            parallaxData={[{
              start: "self",
              startOffset: 0,
              duration: "80vh",
              easing:"ease-in",
              properties: [
                {
                    startValue:10,
                    endValue:-10,
                    unit:"vh",
                    property:"translateY"
                }
              ]
            }
          ]}
            >
            <p className='recent-videos-description'>Like and subscribe!</p>
            </Plx>
          </Plx>
              <YoutubeVids />
          
        </div>
      </div>
      </Plx>
      {/* <div id='content-box-place'>
        <ContentBox />
      </div> */}
       
        
    </div>
    
  )
}
