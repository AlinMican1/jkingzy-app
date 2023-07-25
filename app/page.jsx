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


export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  
  const VideosSection = useRef(null)
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTo,
      behaviour: 'smooth'
    })
  }
  return (
    <div className='home-page'  >
     
      <div id='video-bg'>
        
        <VideoBg />
        
        </div>
      <div id='background-recent-videos'>
      <div id='recent-videos' >
        
        <h1 className='recent-videos-title'>Recent Videos</h1>
      
        <p className='recent-videos-description'>adskjgbaskdjgbakjsgdbajksgbkjasgd</p>
        <div id='foreground' > 
          <YoutubeVids />
          </div> 
      </div>
      </div>
      <div id='content-box-place'>
        <ContentBox />
      </div>
       
        
    </div>
    
  )
}
