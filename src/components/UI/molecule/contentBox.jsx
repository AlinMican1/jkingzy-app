import React from 'react'
import './contentBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTiktok , faInstagram} from '@fortawesome/free-brands-svg-icons'
import Button from '../atom/button'
import Link from 'next/link'
import '../../../../styles/globals.css'
import Reveal from '@/components/animations/reveal'

const ContentBox = () => {
  return (
    <div className='main-content-box'>
      {/* <div className='content-paragraph'>
        <h1>Hello and Welcome to my website</h1> 
        <p>My name is Joshua and i am a flight Sim streamer and plane enjoyer. 
          I create Youtube content and Fiverr custom content chosen by fellow customers </p>
          
          <div className='find-out-box'>
          <Link className='custom-link'  href="/about">
              
              <Button btnText={'More About Me'} btnVariant={'find-out-button'}/>
              
              </Link >
              <Link className='custom-link'  href="/work">
              
              <Button btnText={'Some Of My Work'} btnVariant={'find-out-button'}/>
              
              </Link>
          </div>
      </div> */}
    
      <div className="default-box">
          <h1>TheKingzAce</h1>
          <div className='socials-box'>
          <Link className='custom-link' href={"https://www.youtube.com/@TheKingzAce"}>
         
          <FontAwesomeIcon className="socials-icon-youtube"  icon={faYoutube}></FontAwesomeIcon>
          
          </Link>
          <Link className='custom-link' href={"https://www.tiktok.com/@thekingzace"}>
          
          <FontAwesomeIcon className="socials-icon-tiktok"   icon={faTiktok}></FontAwesomeIcon>
         
          </Link>
          <Link className='custom-link' href={"https://www.instagram.com/thekingzace/"}>
          
          <FontAwesomeIcon className='socials-icon-instagram' icon={faInstagram}></FontAwesomeIcon>
          
          </Link>
          </div>
          <div className='socials-box2'>
              <Link className='custom-link' href={"https://discord.gg/AYPyGEnybN"}>
              
              <Button btnText={'Discord'} btnVariant={'social-button'}/>
              
              </Link >
              <Link className='custom-link' href={"https://www.fiverr.com/thekingzace"}>
              
              <Button btnText={'Fiverr'} btnVariant={'social-button'}/>
              
              </Link>
          </div>
          <div className='support-channel-box'>
             
              <Link className='custom-link' href={"https://streamlabs.com/cptkingzy"}>
              
              <Button btnText={'Support The Channel'} btnVariant={'support-button'}/>
              
              </Link>
          </div>
        </div>
      </div>
  )
}

export default ContentBox